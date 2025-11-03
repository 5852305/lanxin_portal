<template>
  <div class="min-h-screen min-w-screen flex flex-col bg-#F7F0EA">
    <!-- Header -->
    <header v-if="ifShowHeader" class="bg-#8C5C4E text-white p-1 sticky top-0 z-50">
      <slot name="header">
        <div class="container mx-auto flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-bold">Logo</NuxtLink>
          <!-- PC端导航（默认隐藏移动端） -->
          <nav class="hidden md:flex gap-6">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
          </nav>
          <!-- 移动端汉堡按钮 -->
          <button class="md:hidden">☰</button>
        </div>
      </slot>
    </header>

    <!-- Body -->
    <main v-if="ifShowMain" class="flex-1 container mx-auto !px-0">
      <slot >
        主要内容
      </slot>
    </main>

    <!-- Footer -->
    <footer>
      <slot name="footer">
        <div class="container mx-auto text-center text-#9E9E9EFF pb-4 pt-4">
          <nuxt-link to="https://beian.miit.gov.cn/" target="_blank">
          ICP备案/许可证号：蜀ICP备2025125407号</nuxt-link>
        </div>
      </slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  ifShowHeader: boolean
  ifShowMain: boolean
  ifShowFooter: boolean
}>(), {
  ifShowHeader: true,
  ifShowMain: true,
  ifShowFooter: true,
})

</script>

<style scoped>
/*.router-link-active {
  @apply text-blue-400;
}*/
</style>