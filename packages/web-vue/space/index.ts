import { install } from '../_utils'
import Space from './src/space.vue'

export const USpace = install(Space)

export type SpaceInstance = InstanceType<typeof Space>

export * from './src/type'

export default Space
