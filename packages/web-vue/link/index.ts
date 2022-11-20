import { install } from '../_utils'
import Link from './src/link.vue'

export const ULink = install(Link)

export type LinkInstance = InstanceType<typeof Link>

export * from './src/type'

export default Link
