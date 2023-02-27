import { defineComponent, h } from 'vue'
import { UIcon } from '../../icon'
import { ButtonProps } from './props'
import { EButtonSize, EButtonType } from './type'

export default defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Button',

  props: ButtonProps,

  render() {
    const { to, type, size, plain, dashed, round, icon, $slots } = this
    return (
      h(
        to ? 'a' : 'button',
        {
          class: [
            'u-button u-transition hover:u-button-hover active:u-button-active focus-visible:u-focus-base u-disabled:u-disabled',
            type ? EButtonType[type] : '',
            EButtonSize[size],
            (type || plain) ? 'u-solid' : '',
            dashed ? 'u-dashed' : '',
            round ? 'rounded-full' : '',
          ],
          href: to,
        },
        [
          icon ? h(UIcon, { icon }) : undefined,
          $slots.default?.(),
        ],
      )
    )
  },
})
