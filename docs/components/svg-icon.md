# Svg Icon 图标

使用 svg 的图标库

- [源代码](https://github.com/zgsgs/uno-design/tree/master/packages/web-vue/svg-icon)
- [文档编辑](https://github.com/zgsgs/uno-design/blob/master/docs/components/svg-icon.md)

## 使用之前

在使用 `svg-icon` 组件之前，需要先进行安装

```shell
# pnpm
pnpm add --save-dev @uno-design/icon

# npm
npm i --save-dev @uno-design/icon

# yarn
yarn add --save-dev @uno-design/icon
```

## 你需要注意

- `svg-icon` 同时支持 `icon` 配置项和默认插槽来实现 `icon` 的展示，但 `icon` 配置项的优先级高于插槽
- Uno Design 内部其它一切依赖 `svg-icon` 的所有组件，都依赖这个规则

## 贡献

uno Design 使用 [icones](https://icones.js.org) 作为图标库，如下面图表满足不了当前的需求，可进行贡献，贡献指南参考 [CONTRIBUTING.md](https://github.com/zgsgs/uno-design/blob/master/packages/uno-icon/CONTRIBUTING.md)

## 基本使用

`u-svg-icon` 需要插入一个 `svg`

`color` 和 `size` 属性可分别对于颜色和字体大小进行配置

它同时支持 `icon` 属性传递和插槽

::: demo

```vue
<script lang="ts" setup>
import {
  IconApps,
  IconBluetooth,
  IconBook
} from '@uno-design/icon'
</script>

<template>
  <u-svg-icon>
    <IconApps />
  </u-svg-icon>

  <u-svg-icon color="red">
    <IconBluetooth />
  </u-svg-icon>

  <u-svg-icon size="34px" :icon="IconBook" />
</template>
```

:::

## 集合

`svg-icon` 集合，**点击即可直接复制**，共收入 {{num}} 个图标

```vue
<template>
  <USvgIcon />
</template>
```

## Svg Icon Attributes

| 参数    | 说明               | 类型                       | 可选值 | 默认值 |
| ------- | ------------------ | -------------------------- | ------ | ------ |
| `color` | icon 颜色          | string                     | ——     | ——     |
| `size`  | icon 大小          | string / number            | ——     | 21px   |
| `icon`  | icon 内容          | object (VNode / Component) | ——     | ——     |
| `click` | 点击之后触发的回调 | Function                   | ——     | ——     |

## Svg Icon Slots

| 名称      | 说明        |
| --------- | ----------- |
| `default` | icon 的内容 |

## Contributors

<a href="https://github.com/zgsgs" target="_blank">
  <u-avatar round src="https://avatars.githubusercontent.com/u/22882957?v=4" />
</a>

<script setup lang="ts">
// import Svg from '@uno-design/icon'
// import demo1Vue from './_demos/svg-icon/demo1.vue'
// import demo2Vue from './_demos/svg-icon/demo2.vue'

// const num = Object.keys(Svg).length
</script>
