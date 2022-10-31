import { install } from '../_utils'
import Button from './src/button.vue'

export const UButton = install(Button)

export type ButtonInstance = InstanceType<typeof Button>

export * from './src/type'

export default Button
