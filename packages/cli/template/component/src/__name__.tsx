import { defineComponent, onMounted } from 'vue'
import { Emits, Props } from './props'

export default defineComponent({
  name: '<%= upperPrefix %><%= displayName %>',
  props: Props,
  emits: Emits,
  setup(props, { emit }) {
    onMounted(() => {
      // ...
    })

    return () => (
      <div></div>
    )
  },
})
