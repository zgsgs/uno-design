import { defineComponent, h } from 'vue'
import { <%= displayName %>Props } from './props'

export default defineComponent({
  name: '<%= displayName %>',
  props: <%= displayName %>Props,
  render() {
    const { as, $slots } = this
    return (
      h(
        as || 'div',
        {
          class: [
            'u-<%= name %> hover:u-<%= name %>-hover active:u-<%= name %>-active',
          ],
        },
        [
          $slots.default?.(),
        ],
      )
    )
  },
})
