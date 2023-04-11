import DefineOptions from 'unplugin-vue-define-options/vite'
// import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import svgLoader from 'vite-svg-loader'
import { getSrcPath } from '../utils'

const srcPath = getSrcPath()

const customIconPath = `${srcPath}/assets/svg`

export default [
  DefineOptions(),
  svgLoader(), // svg 插件
  Icons({
    compiler: 'vue3',
    customCollections: {
      custom: FileSystemIconLoader(customIconPath),
    },
    scale: 1,
    defaultClass: 'inline-block',
  }),
  Components({
    dts: 'types/components.d.ts',
    types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
    resolvers: [NaiveUiResolver(), IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })],
  }),
  createSvgIconsPlugin({
    iconDirs: [customIconPath],
    symbolId: 'icon-custom-[dir]-[name]',
    inject: 'body-last',
    customDomId: '__CUSTOM_SVG_ICON__',
  }),
  // AutoImport({
  //   imports: [
  //     'vue',
  //     'vue-i18n',
  //     'vue/macros',
  //     '@vueuse/head',
  //     '@vueuse/core',
  //     {
  //       'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
  //     },
  //   ],
  //   dts: 'types/auto-imports.d.ts',
  // }),
]
