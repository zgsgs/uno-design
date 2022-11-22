# Demo

探索 Demo 演示方案

- [源代码](https://github.com/zgsgs/uno-design/tree/master/packages/web-vue/demo)
- [文档编辑](https://github.com/zgsgs/uno-design/blob/master/docs/docs/demo.md)

## 测试组件Demo演示方案

### VitePress 原生支持

<script setup>
  // 这个 demo1 重复了多次，复制修改的时候容易漏掉
  import UButton from '../../packages/web-vue/button'
</script>
  <ClientOnly>
  	<UButton type="success">成功按钮</UButton>
  </ClientOnly>
  <details>
    <summary>查看代码</summary>
<!-- 这个源码引用方式是 vitepress 提供的 -->

<<< components/_demos/button.vue
  </details>

### vitepress-demo-edit 插件

:::demo

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
const text = ref('')
</script>

<template>
  <button class="demo-btn" @click="count--">
    -
  </button>
  <b class="demo-count" :class="{ red: count >= 3 }">{{ count }}</b>
  <button class="demo-btn" @click="count++">
    +
  </button>
</template>

<style>
/* 默认 scoped */
.demo-btn {
  padding: 0 10px;
  border: 1px solid #ccc;
}
.demo-count {
  display: inline-block;
  text-align: center;
  margin: 0 10px;
  min-width: 30px;
}
/* global */

:global(.red) {
  color: red;
}
</style>
```
```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
const text = ref('')
</script>

<template>
  <div>{{ text }}</div>
</template>

<style>
.btn{}
</style>
```

:::
