<template>
  <div class="h-full w-full">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold">
        <img src="/default_white_only_font_logo.png" alt="logo" style="width: 60px;height: 24px;"/>
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
  </div>
</template>

<script setup lang="ts">
const menuList = ref([
  {to:"/brand-desc", name:"品牌简介"},
  {to:"/core-steam", name:"核心团队"},
  {to:"/brand-affect", name:"品牌影响力"},
  {to:"/win-win", name:"品牌合作"},
  {to:"/about", name:"关于我们"},
])
const showMobileMenu = ref(false)


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

<style scoped>

</style>