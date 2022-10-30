import { install } from '../../utils'
import SvgIcon from './src/svg-icon.vue'

export const USvgIcon = install(SvgIcon)

export type SvgIconInstance = InstanceType<typeof SvgIcon>

export * from './src/type.d'

export default SvgIcon
