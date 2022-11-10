import { defineComponent } from 'vue'
import { Emits, Props } from './props'

export default defineComponent({
  props: Props,
  emits: Emits,
  setup(props, context) {
    return () => (<>
      <div></div>
    </>)
  },
})
