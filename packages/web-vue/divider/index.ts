import { install } from '../_utils'
import Divider from './src/divider.vue'

export const UDivider = install(Divider)

export type DividerInstance = InstanceType<typeof Divider>

export * from './src/type'

export default Divider
