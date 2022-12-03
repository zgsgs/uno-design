import { install } from '../_utils'
import Avatar from './src/avatar.vue'

export const UAvatar = install(Avatar)

export type AvatarInstance = InstanceType<typeof Avatar>

export * from './src/type'

export default Avatar
