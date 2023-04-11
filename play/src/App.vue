<script setup lang="ts">
const onClick = () => {
  // console.log('onClick')
}
</script>

<template>
  <div class="flex gap-2">
    <u-button to="https://google.com" target="_bank">
      Default Button
    </u-button>
    <u-button type="primary" as="span" @click="onClick">
      Primary Button
    </u-button>
    <u-button type="success">
      success Button
    </u-button>
    <u-button type="warning">
      Warning Button
    </u-button>
    <u-button type="info">
      Info Button
    </u-button>
    <u-button type="danger">
      Danger Button
    </u-button>
  </div>
</template>
