import vue from './vue'
import unplugin from './unplugin'
import unocss from './unocss'
// import visualizer from './visualizer'
// import compress from './compress'

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(viteEnv) {
  const plugins = [...vue, ...unplugin, unocss]
  // eslint-disable-next-line no-console
  console.log('viteEnv', viteEnv)

  // if (viteEnv.VITE_VISUALIZER === 'Y')
  //   plugins.push(visualizer)

  // if (viteEnv.VITE_COMPRESS === 'Y')
  //   plugins.push(compress(viteEnv))

  return plugins
}
