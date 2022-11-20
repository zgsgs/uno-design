import { install } from '../_utils'
import ButtonGroup from './src/button-group.vue'

export const UButtonGroup = install(ButtonGroup)

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>

export * from './src/type'

export default ButtonGroup
