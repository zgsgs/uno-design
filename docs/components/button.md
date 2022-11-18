# Button 按钮

功能很强大的按钮

- [源代码](https://github.com/zgsgs/uno-design/tree/master/packages/uno-design/button)
- [文档编辑](https://github.com/zgsgs/uno-design/blob/master/docs/components/button.md)

## 测试组件Demo演示方案

### VitePress 原生支持

<script setup>
  // 这个 demo1 重复了多次，复制修改的时候容易漏掉
  import UButton from '../../packages/web-vue/button'
</script>
<DemoContainer title="基本使用">
  <ClientOnly>
  	<UButton type="success">成功按钮</UButton>
  </ClientOnly>
  <details>
    <summary>查看代码</summary>
<!-- 这个源码引用方式是 vitepress 提供的 -->

<<< components/_demos/button.vue
  </details>
</DemoContainer>

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

## 基本使用

`type` 属性可以配置不同的按钮类型，展示不同的颜色状态

`simple` 属性可以配置简约的按钮，样式依然由 `type` 控制

::: demo

```vue
<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <u-button type="default">
    默认按钮
  </u-button>
  <u-button type="primary">
    主要按钮
  </u-button>
  <u-button type="success">
    成功按钮
  </u-button>
  <u-button type="danger">
    危险按钮
  </u-button>
  <u-button type="warning">
    警告按钮
  </u-button>

  <br>

  <u-button simple type="default">
    默认按钮
  </u-button>
  <u-button simple type="primary">
    主要按钮
  </u-button>
  <u-button simple type="success">
    成功按钮
  </u-button>
  <u-button simple type="danger">
    危险按钮
  </u-button>
  <u-button simple type="warning">
    警告按钮
  </u-button>
</template>
```

:::

## 圆角按钮

`round` 属性可以将按钮变成圆角风格的按钮

::: demo

```vue
<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <u-button round type="default">
    默认按钮
  </u-button>
  <u-button round type="primary">
    主要按钮
  </u-button>
  <u-button round type="success">
    成功按钮
  </u-button>
  <u-button round type="danger">
    危险按钮
  </u-button>
  <u-button round type="warning">
    警告按钮
  </u-button>

  <br>

  <u-button round simple type="default">
    默认按钮
  </u-button>
  <u-button round simple type="primary">
    主要按钮
  </u-button>
  <u-button round simple type="success">
    成功按钮
  </u-button>
  <u-button round simple type="danger">
    危险按钮
  </u-button>
  <u-button round simple type="warning">
    警告按钮
  </u-button>
</template>
```

:::

## 禁用状态

`disabled` 属性可以将按钮变成禁用状态

`loading` 属性可以将按钮变成 `loading` 状态

::: demo

```vue
<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <u-button disabled type="default">
    默认按钮
  </u-button>
  <u-button disabled type="primary">
    主要按钮
  </u-button>
  <u-button disabled type="success">
    成功按钮
  </u-button>
  <u-button disabled type="danger">
    危险按钮
  </u-button>
  <u-button disabled type="warning">
    警告按钮
  </u-button>

  <br>

  <u-button loading type="default">
    默认按钮
  </u-button>
  <u-button loading type="primary">
    主要按钮
  </u-button>
  <u-button loading type="success">
    成功按钮
  </u-button>
  <u-button loading type="danger">
    危险按钮
  </u-button>
  <u-button loading type="warning">
    警告按钮
  </u-button>
</template>
```

:::

## 不同尺寸

`size` 属性可以配置不同尺寸的按钮

::: demo

```vue
<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <u-button size="large" type="primary">
    大型按钮
  </u-button>
  <u-button size="middle" type="success">
    中型按钮
  </u-button>
  <u-button size="small" type="danger">
    小型按钮
  </u-button>
  <u-button size="mini" type="warning">
    迷你按钮
  </u-button>
</template>
```

:::

## 文字按钮

`text` 属性可以将按钮设置成文字按钮

::: demo

```vue
<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <u-button text type="default">
    默认按钮
  </u-button>
  <u-button text type="primary">
    主要按钮
  </u-button>
  <u-button text type="success">
    成功按钮
  </u-button>
  <u-button text type="danger">
    危险按钮
  </u-button>
  <u-button text type="warning">
    警告按钮
  </u-button>

  <br>

  <u-button text round type="default">
    默认按钮
  </u-button>
  <u-button text round type="primary">
    主要按钮
  </u-button>
  <u-button text round type="success">
    成功按钮
  </u-button>
  <u-button text round type="danger">
    危险按钮
  </u-button>
  <u-button text round type="warning">
    警告按钮
  </u-button>
</template>
```

:::

## 带有阴影

可以自定义按钮的阴影样式，可传入一个原生 [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) 属性值

或者也可以通过 [Neumorphism](https://neumorphism.io) 自己手动调节阴影样式

::: demo

```vue
<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <u-button shadow="0 2px 7px 0 #f0f0f0" type="default">
    默认按钮
  </u-button>
  <u-button shadow="0 2px 7px 0 #2d5af1" type="primary">
    主要按钮
  </u-button>
  <u-button shadow="0 2px 7px 0 #52b35e" type="success">
    成功按钮
  </u-button>
  <u-button shadow="0 2px 7px 0 #ff0200" type="danger">
    危险按钮
  </u-button>
  <u-button shadow="0 2px 7px 0 #fcc202" type="warning">
    警告按钮
  </u-button>
</template>
```

:::

## 涟漪效果

`ripples` 可以配置是否展示点击涟漪效果，也可以通过 `ripples-color` 自定义涟漪背景色

::: demo

```vue
<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <u-button type="primary">
    主要按钮
  </u-button>
  <u-button type="success" ripples>
    涟漪效果
  </u-button>
  <u-button type="warning" ripples>
    点我试试
  </u-button>
  <u-button type="danger" ripples simple>
    看看我
  </u-button>
  <u-button type="success" text ripples ripples-color="green">
    自定义涟漪颜色
  </u-button>
</template>
```

:::

## 按钮组

使用 `<u-button-group>` 标签包裹按钮组件可以实现按钮组效果

`vertical` 属性可以配置纵向排列的按钮组

::: demo


```vue
<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <u-button-group>
    <u-button round type="primary">
      左边的
    </u-button>
    <u-button round type="primary">
      中间的
    </u-button>
    <u-button round type="primary">
      右边的
    </u-button>
  </u-button-group>

  <br>
  <br>

  <u-button-group vertical>
    <u-button type="primary">
      上边的
    </u-button>
    <u-button type="primary">
      中间的
    </u-button>
    <u-button round type="primary">
      下边的
    </u-button>
  </u-button-group>
</template>
```

:::

## 自定义颜色

`color` 属性可以自定义按钮的颜色，使用自定义颜色之后，`simple` 和 `text` 将不会再继续工作，不过自定义颜色仅支持 [hex](https://baike.baidu.com/item/%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E9%A2%9C%E8%89%B2%E7%A0%81/10894232?fr=aladdin) 格式的色号

使用自定义颜色之后 `Uno Design` 会自动推断 `hover` 和 `active` 的效果，那么需要使用 `font-color` 来自定义文字的颜色

::: demo

```vue
<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <u-button font-color="#fff" color="#ff0de5" round>
    自定义颜色
  </u-button>
  <u-button font-color="#fff" color="#22c1c3" loading>
    loading
  </u-button>
</template>
```

:::

## Button Attributes

| 参数            | 说明                                                                                                                                                                                                          | 类型                       | 可选值                                                  | 默认值   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------- | -------- |
| `bold`          | 按钮文字是否加粗                                                                                                                                                                                              | boolean                    | ——                                                      | false    |
| `circle`        | 是否为圆形按钮                                                                                                                                                                                                | boolean                    | ——                                                      | false    |
| `round`         | 是否为圆角按钮                                                                                                                                                                                                | boolean                    | ——                                                      | false    |
| `font-size`     | 文字字体大小                                                                                                                                                                                                  | string / number            | ——                                                      | 14px     |
| `font-color`    | 文字字体颜色                                                                                                                                                                                                  | string                     | ——                                                      | ——       |
| `size`          | 按钮尺寸，设置按钮的高度和水平 padding                                                                                                                                                                        | string                     | `large` `middle` `small` `mini`                         | middle   |
| `block`         | 是否为块级元素                                                                                                                                                                                                | boolean                    | ——                                                      | false    |
| `href`          | 链接按钮的地址                                                                                                                                                                                                | string                     | ——                                                      | ——       |
| `target`        | 原生 target 属性，在 link 类型存在时生效                                                                                                                                                                      | string                     | `_blank` `_self` `_parent` `_top`                       | \_self   |
| `loading`       | 是否展示 loading 状态                                                                                                                                                                                         | boolean                    | ——                                                      | false    |
| `disabled`      | 是否禁用按钮                                                                                                                                                                                                  | boolean                    | ——                                                      | false    |
| `before-icon`   | 之前的 icon                                                                                                                                                                                                   | object (VNode / Component) | ——                                                      | null     |
| `after-icon`    | 之后的 icon                                                                                                                                                                                                   | object (VNode / Component) | ——                                                      | null     |
| `loading-icon`  | loading 状态下的 icon                                                                                                                                                                                         | object (VNode / Component) | ——                                                      | null     |
| `type`          | 按钮的类型 （不同类型对应不同的背景和字体颜色，非自定义按钮颜色时有效）                                                                                                                                       | string                     | `default` `primary` `success` <br /> `danger` `warning` | default  |
| `autofocus`     | 是否自动获取焦点                                                                                                                                                                                              | boolean                    | ——                                                      | false    |
| `name`          | 按钮的名字                                                                                                                                                                                                    | string                     | ——                                                      | u-button |
| `shadow`        | 按钮的阴影                                                                                                                                                                                                    | string                     | ——                                                      | ——       |
| `text`          | 是否为文字按钮 （非自定义按钮颜色时有效）                                                                                                                                                                     | boolean                    | ——                                                      | false    |
| `simple`        | 是否为简约按钮 （非自定义按钮颜色时有效）                                                                                                                                                                     | boolean                    | ——                                                      | false    |
| `ripples`       | 是否启用点击涟漪效果                                                                                                                                                                                          | boolean                    | ——                                                      | false    |
| `ripples-color` | 涟漪背景色                                                                                                                                                                                                    | string                     | ——                                                      | #fff     |
| `native-type`   | 按钮的原生类型                                                                                                                                                                                                | string                     | `button` `submit` `reset`                               | button   |
| `color`         | 自定义按钮的背景颜色，仅支持 [hex](https://baike.baidu.com/item/%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E9%A2%9C%E8%89%B2%E7%A0%81/10894232?fr=aladdin) 格式的色号。如果未指定`font-color`，则字体颜色默认为白色 | string                     | ——                                                      | ——       |
| `click`         | 点击执行的回调                                                                                                                                                                                                | Function                   | ——                                                      | null     |

## ButtonGroup Attributes

| 参数       | 说明         | 类型    | 可选值                          | 默认值 |
| ---------- | ------------ | ------- | ------------------------------- | ------ |
| `size`     | 按钮尺寸     | string  | `large` `middle` `small` `mini` | middle |
| `vertical` | 是否纵向排列 | boolean | ——                              | false  |

## Button Slots

| 名称          | 说明              |
| ------------- | ----------------- |
| `default`     | 按钮的内容        |
| `beforeIcon`  | 之前的 icon       |
| `afterIcon`   | 之后的 icon       |
| `loadingIcon` | 按钮 loading icon |

## ButtonGroup Slots

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 按钮组的内容 |

## Interface

组件导出以下类型定义：

```ts
import type {
  ButtonGroupInstance,
  ButtonGroupPropsType,
  ButtonGroupSizeType,
  ButtonInstance,
  ButtonNativeType,
  ButtonPropsType,
  ButtonSizeType,
  ButtonTargetType,
  ButtonType
} from 'uno-design'
```

## Contributors

<!-- <a href="https://github.com/Tyh2001" target="_blank">
  <u-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>

<a href="https://github.com/lxqddd" target="_blank">
  <u-avatar round src="https://avatars.githubusercontent.com/u/56574505?v=4" />
</a>

<a href="https://github.com/long-life233" target="_blank">
  <u-avatar round src="https://avatars.githubusercontent.com/u/77321887?v=4" />
</a> -->

<style scoped>
.u-button {
  margin: 5px;
}
.u-button-group-vertical .u-button,
.u-button-group .u-button {
  margin: 0;
}
</style>
