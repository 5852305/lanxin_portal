<template>
  <div class="min-h-screen min-w-screen flex flex-col bg-#F7F0EA">
    <!-- Header -->
    <header class="bg-#8C5C4E text-white p-1 sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">
          <img src="/default_white_only_font_logo.png" alt="logo" style="width: 40px;height: 16px;"/>
        </NuxtLink>

        <!-- PC端导航（默认隐藏移动端） -->
        <nav class="hidden md:flex gap-6">
          <NuxtLink v-for="(item,index) in menuList" :key="index" :to="item.to" class="hover:text-blue-400">{{item.name}}</NuxtLink>
        </nav>

        <!-- 移动端汉堡按钮 -->
        <button class="md:hidden text-1xl focus:outline-none" @click="toggleMenu">
          ☰
        </button>
      </div>

      <!-- 移动端下拉菜单 -->
      <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-1"
      >
        <nav
            v-show="showMobileMenu"
            class="md:hidden bg-gray-700 p-4 space-y-3"
            @mouseleave="showMobileMenu = false"
        >
          <NuxtLink v-for="(item,index) in menuList" :key="index" :to="item.to" class="block py-2" @click="showMobileMenu = false">{{item.name}}</NuxtLink>
        </nav>
      </transition>
    </header>

    <!-- Body -->
    <main class="flex-1 container mx-auto !px-0">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto text-center">
        © 2023 My App
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const showMobileMenu = ref(false)
const menuList = ref([
  {to:"/", name:"Home"},
  {to:"/about", name:"about"},
])

const toggleMenu = () => {
  showMobileMenu.value  = !showMobileMenu.value
}

// 点击页面其他区域关闭菜单
const closeMenuOnClickOutside = (e:MouseEvent) => {
  const target = e.target  as HTMLElement | null // 允许 null
  if (!target?.closest('header')) { // 安全调用
    showMobileMenu.value  = false
  }
}

onMounted(() => {
  document.addEventListener('click',  closeMenuOnClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click',  closeMenuOnClickOutside)
})
</script>

<style>
.router-link-active {
  @apply text-blue-400;
}
</style>