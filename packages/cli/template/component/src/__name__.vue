<script lang="ts" setup name="<%= upperPrefix %><%= displayName %>">
import { Emits, Props } from './props'
import type { <%= displayName %>PropsType } from './props'

const prop: <%= displayName %>PropsType = defineProps(Props)
defineEmits(Emits)
</script>

<template>
  <div class="<%= prefix%>-<%= name%>">
    <%= upperPrefix %><%= displayName %>
  </div>
</template>
