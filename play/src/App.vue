<script setup lang="ts">
import { UButton, UButtonGroup, USpace } from '../../packages/web-vue/index'
</script>

<template>
  <USpace row-gap="8">
    <UButton type="success">
      Show1
    </UButton>
    <UButton type="success">
      Show2
    </UButton>
    <UButton type="success">
      Show3
    </UButton>
  </USpace>
  <br>
  <UButtonGroup vertical>
    <UButton>dddd</UButton>
    <UButton>dddd</UButton>
    <UButton>dddd</UButton>
  </UButtonGroup>
</template>

<style scoped>
</style>
