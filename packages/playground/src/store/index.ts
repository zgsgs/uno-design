import { reactive, version, watchEffect } from 'vue'
import { File, compileFile } from '@vue/repl'
import * as defaultCompiler from 'vue/compiler-sfc'
import type { OutputModes, SFCOptions, Store, StoreOptions, StoreState } from '@vue/repl'
// import { UMessage } from '@uno-design/web-vue'
import { atou, defaultMainFile, publicPath, unoImports, unoPlugin, unoPluginCode, utoa, welcomeCode } from '../utils'

export class ReplStore implements Store {
  state: StoreState
  compiler = defaultCompiler
  vueVersion?: string
  options?: SFCOptions
  initialShowOutput: boolean
  initialOutputMode: OutputModes = 'preview'

  private defaultVueRuntimeURL: string
  private defaultVueServerRendererURL: string
  private pendingCompiler: Promise<any> | null = null

  constructor({
    serializedState = '',
    defaultVueRuntimeURL = `https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js`,
    defaultVueServerRendererURL = `https://unpkg.com/@vue/server-renderer@${version}/dist/server-renderer.esm-browser.js`,
    showOutput = false,
    outputMode = 'preview',
  }: StoreOptions = {}) {
    let files: StoreState['files'] = {}

    if (serializedState) {
      const saved = JSON.parse(atou(serializedState))
      for (const filename in saved)
        files[filename] = new File(filename, saved[filename])
    }
    else {
      files = {
        [defaultMainFile]: new File(defaultMainFile, welcomeCode),
      }
    }

    this.defaultVueRuntimeURL = defaultVueRuntimeURL
    this.defaultVueServerRendererURL = defaultVueServerRendererURL
    this.initialShowOutput = showOutput
    this.initialOutputMode = outputMode as OutputModes

    let mainFile: string = defaultMainFile
    if (!files[mainFile])
      mainFile = Object.keys(files)[0]

    this.state = reactive({
      mainFile,
      files,
      activeFile: files[mainFile],
      errors: [],
      vueRuntimeURL: this.defaultVueRuntimeURL,
      vueServerRendererURL: this.defaultVueServerRendererURL,
      unoDesign: `${publicPath}/es/index.js`,
      resetFlip: true,
    }) as StoreState

    this.initImportMap()

    // 注入 Uno Design
    this.state.files[unoPlugin] = new File(unoPlugin, unoPluginCode, !import.meta.env.DEV)

    this.init()
  }

  // don't start compiling until the options are set
  init = () => {
    watchEffect(() => compileFile(this, this.state.activeFile))
    for (const file in this.state.files) {
      if (file !== defaultMainFile)
        compileFile(this, this.state.files[file])
    }
  }

  setActive = (filename: string) => {
    this.state.activeFile = this.state.files[filename]
  }

  addFile = (fileOrFilename: string | File) => {
    const file = typeof fileOrFilename === 'string' ? new File(fileOrFilename) : fileOrFilename
    this.state.files[file.filename] = file
    if (!file.hidden)
      this.setActive(file.filename)
  }

  deleteFile = (filename: string) => {
    if (filename === unoPlugin) {
      // UMessage.danger('Uno Design relies on this file and cannot be deleted!')
      // eslint-disable-next-line no-alert
      alert('Uno Design relies on this file and cannot be deleted!')
      return
    }
    // eslint-disable-next-line no-alert
    if (confirm(`Are you sure you want to delete ${filename}?`)) {
      if (this.state.activeFile.filename === filename)
        this.state.activeFile = this.state.files[this.state.mainFile]

      delete this.state.files[filename]
    }
  }

  serialize = (): string => {
    return `#${utoa(JSON.stringify(this.getFiles()))}`
  }

  getFiles = (): Record<string, string> => {
    const exported: Record<string, string> = {}
    for (const filename in this.state.files)
      exported[filename] = this.state.files[filename].code

    return exported
  }

  setFiles = async (newFiles: Record<string, string>, mainFile = defaultMainFile): Promise<void> => {
    const files: Record<string, File> = {}
    if (mainFile === defaultMainFile && !newFiles[mainFile])
      files[mainFile] = new File(mainFile, welcomeCode)

    for (const filename in newFiles)
      files[filename] = new File(filename, newFiles[filename])

    for (const file in files)
      await compileFile(this, files[file])

    this.state.mainFile = mainFile
    this.state.files = files
    this.initImportMap()
    this.setActive(mainFile)
    this.forceSandboxReset()
  }

  private forceSandboxReset = () => {
    this.state.resetFlip = !this.state.resetFlip
  }

  private initImportMap = () => {
    const map = this.state.files['import-map.json']
    if (!map) {
      this.state.files['import-map.json'] = new File(
        'import-map.json',
        JSON.stringify(
          {
            imports: {
              vue: this.defaultVueRuntimeURL,
              ...unoImports,
            },
          },
          null,
          2,
        ),
      )
    }
    else {
      try {
        const json = JSON.parse(map.code)
        if (!json.imports.vue) {
          json.imports.vue = this.defaultVueRuntimeURL
          map.code = JSON.stringify(json, null, 2)
        }
      }
      catch (err) {
        console.error(err)
      }
    }
  }

  getImportMap = () => {
    try {
      return JSON.parse(this.state.files['import-map.json'].code)
    }
    catch (e) {
      this.state.errors = [`Syntax error in import-map.json: ${(e as Error).message}`]
      return {}
    }
  }

  setImportMap = (map: {
    imports: Record<string, string>
    scopes?: Record<string, Record<string, string>>
  }) => {
    this.state.files['import-map.json']!.code = JSON.stringify(map, null, 2)
  }

  async setVueVersion(version: string) {
    this.vueVersion = version
    const compilerUrl = `https://unpkg.com/@vue/compiler-sfc@${version}/dist/compiler-sfc.esm-browser.js`
    const runtimeUrl = `https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js`
    const ssrUrl = `https://unpkg.com/@vue/server-renderer@${version}/dist/server-renderer.esm-browser.js`
    this.pendingCompiler = import(/* @vite-ignore */ compilerUrl)
    this.compiler = await this.pendingCompiler
    this.pendingCompiler = null
    this.state.vueRuntimeURL = runtimeUrl
    this.state.vueServerRendererURL = ssrUrl
    const importMap = this.getImportMap()
    const imports = importMap.imports || (importMap.imports = {})
    imports.vue = runtimeUrl
    imports['vue/server-renderer'] = ssrUrl
    this.setImportMap(importMap)
    this.forceSandboxReset()
    // eslint-disable-next-line no-console
    console.info(`[@vue/repl] Now using Vue version: ${version}`)
  }

  resetVueVersion() {
    this.vueVersion = undefined
    this.compiler = defaultCompiler
    this.state.vueRuntimeURL = this.defaultVueRuntimeURL
    this.state.vueServerRendererURL = this.defaultVueServerRendererURL
    const importMap = this.getImportMap()
    const imports = importMap.imports || (importMap.imports = {})
    imports.vue = this.defaultVueRuntimeURL
    imports['vue/server-renderer'] = this.defaultVueServerRendererURL
    this.setImportMap(importMap)
    this.forceSandboxReset()
    // eslint-disable-next-line no-console
    console.info('[@vue/repl] Now using default Vue version')
  }
}
