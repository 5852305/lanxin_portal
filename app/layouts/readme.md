layouts

Copy page

Nuxt 提供了一个布局框架，用于将常见的 UI 模式提取为可重用的布局。
为了获得最佳性能，放置在此目录中的组件将在使用时通过异步导入自动加载。
启用布局
通过在 app.vue 中添加 <NuxtLayout> 来启用布局：

app.vue

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
要使用布局：

在页面中使用 definePageMeta 设置 layout 属性。
设置 <NuxtLayout> 的 name 属性。
布局名称会被规范化为 kebab-case，因此 someLayout 会变为 some-layout。
如果未指定布局，将使用 layouts/default.vue。
如果你的应用只有一个布局，我们建议直接使用 app.vue。
与其他组件不同，你的布局必须具有单一根元素，以便 Nuxt 在布局切换时应用过渡效果，且该根元素不能是 <slot />。
默认布局
添加一个 ~/layouts/default.vue：

layouts/default.vue

<template>
  <div>
    <p>跨所有页面共享的默认布局内容</p>
    <slot />
  </div>
</template>
在布局文件中，页面的内容将在 <slot /> 组件中显示。

命名布局
Directory Structure

-| layouts/
---| default.vue
---| custom.vue
然后你可以在页面中使用 custom 布局：

pages/about.vue

<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>
了解更多关于 definePageMeta 的信息。
你可以使用 <NuxtLayout> 的 name 属性直接覆盖所有页面的默认布局：

app.vue

<script setup lang="ts">
// 可以根据 API 调用或登录状态选择
const layout = "custom";
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
如果布局位于嵌套目录中，布局的名称将基于其路径目录和文件名，重复的片段会被移除。

文件	布局名称
~/layouts/desktop/default.vue	desktop-default
~/layouts/desktop-base/base.vue	desktop-base
~/layouts/desktop/index.vue	desktop
为了清晰起见，我们建议布局的文件名与其名称一致：

文件	布局名称
~/layouts/desktop/DesktopDefault.vue	desktop-default
~/layouts/desktop-base/DesktopBase.vue	desktop-base
~/layouts/desktop/Desktop.vue	desktop
阅读并编辑实时示例中的内容 Docs > Examples > Features > Layouts.
动态更改布局
你还可以使用 setPageLayout 辅助函数动态更改布局：


<script setup lang="ts">
function enableCustomLayout () {
  setPageLayout('custom')
}
definePageMeta({
  layout: false,
});
</script>

<template>
  <div>
    <button @click="enableCustomLayout">更新布局</button>
  </div>
</template>
 阅读并编辑实时示例中的内容 Docs > Examples > Features > Layouts.
逐页覆盖布局
如果你在使用页面，可以通过设置 layout: false 并在页面内使用 <NuxtLayout> 组件来完全控制布局。


pages/index.vue

layouts/custom.vue

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
  <div>
    <NuxtLayout name="custom">
      <template #header> 一些头部模板内容。 </template>

      页面其余部分
    </NuxtLayout>
  </div>
</template>
如果你在页面中使用 <NuxtLayout>，请确保它不是根元素（或禁用布局/页面过渡）。