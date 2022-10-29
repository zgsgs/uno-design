import { reactive, version, watchEffect } from 'vue'
import { File, compileFile } from '@vue/repl'
import * as defaultCompiler from 'vue/compiler-sfc'
import type { OutputModes, SFCOptions, Store, StoreState } from '@vue/repl'
// import { uMessage } from '@uno-design/web-vue'
import { atou, defaultMainFile, publicPath, unoImports, unoPlugin, unoPluginCode, utoa, welcomeCode } from '../utils'

export class ReplStore implements Store {
  state: StoreState
  compiler = defaultCompiler
  vueVersion?: string
  options?: SFCOptions
  initialShowOutput: boolean
  initialOutputMode: OutputModes = 'preview'
  private readonly defaultVueRuntimeURL: string

  constructor({
    serializedState = '',
    defaultVueRuntimeURL = `https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js`,
    showOutput = false,
    outputMode = 'preview',
  }: {
    serializedState?: string
    showOutput?: boolean
    outputMode?: OutputModes | string
    defaultVueRuntimeURL?: string
  }) {
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
      unoDesign: `${publicPath}/es/index.js`,
    }) as unknown as StoreState

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
      // uMessage.danger('Uno Design 依赖此文件，不可删除！')
      return
    }
    // eslint-disable-next-line no-alert
    if (confirm(`你确定删除 ${filename} 吗？`)) {
      if (this.state.activeFile.filename === filename)
        this.state.activeFile = this.state.files[this.state.mainFile]

      delete this.state.files[filename]
    }
  }

  getImportMap = (): void | object => {
    try {
      return JSON.parse(this.state.files['import-map.json'].code)
    }
    catch (e) {
      this.state.errors = [`Syntax error in import-map.json: ${(e as Error).message}`]
      return {}
    }
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
        // eslint-disable-next-line no-console
        console.log(err)
      }
    }
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
  }

  serialize = (): string => {
    return `#${utoa(JSON.stringify(this.getFiles()))}`
  }
}
