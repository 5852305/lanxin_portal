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
    <footer v-if="ifShowFooter">
      <slot name="footer">
        <div class="container mx-auto text-center">
          © 2023 My App
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