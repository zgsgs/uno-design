import { install } from '../../utils'
import Button from './src/button.vue'

export const UButton = install(Button)

export type ButtonInstance = InstanceType<typeof Button>

export * from './src/type.d'

export default Button
