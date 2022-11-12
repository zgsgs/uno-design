import { resolve } from 'path'
import { copyFileSync } from 'fs'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader' // https://github.com/jpkleemans/vite-svg-loader
import dts from 'vite-plugin-dts'
import type { UserConfigExport } from 'vite'
import { version } from './packages/icon/package.json'

const move = (): void => {
  const files = [
    { input: './packages/icon/README.md', outDir: 'dist-icon/README.md' },
    {
      input: './packages/icon/package.json',
      outDir: 'dist-icon/package.json',
    },
    { input: './packages/icon/LICENSE', outDir: 'dist-icon/LICENSE' },
  ] as const

  files.forEach((item): void => {
    copyFileSync(item.input, item.outDir)
  })

  console.warn('\n' + `Uno Icon ${version} 版本打包成功 🎉🎉🎉` + '\n')
}

export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      dts({
        insertTypesEntry: true, // 是否生成类型声明入口
        cleanVueFileName: true, // 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
        copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
        include: ['./packages/icon'], // 手动设置包含路径的 glob
        // 构建后回调钩子
        afterBuild: (): void => {
          move()
        },
      }),
      svgLoader(),
    ],
    build: {
      minify: true,
      emptyOutDir: false,
      outDir: resolve(__dirname, 'dist-icon'),
      lib: {
        entry: resolve(__dirname, 'packages/icon/index.ts'),
        formats: ['es'],
        fileName: () => 'index.js',
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          preserveModules: true,
        },
      },
    },
  } as UserConfigExport
}
