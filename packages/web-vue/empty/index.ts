import { install } from '../_utils'
import Empty from './src/empty.vue'

export const UEmpty = install(Empty)

export type EmptyInstance = InstanceType<typeof Empty>

export * from './src/type'

export default Empty
