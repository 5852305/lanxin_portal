<template>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage class="font-jiangcheng"/>
    </NuxtLayout>
</template>
<script setup lang="ts">
import '@unocss/reset/tailwind.css'
console.log(' 别名 ~ 指向:', import.meta.url)  // 应输出项目根目录下的路径

// const { isMobile, isIos, isDesktop } = useDevice()
// console.log("设备类型",isMobile,isIos,isDesktop);
const { isPhone, isNotPhone } = useDeviceUtils()
console.log("手机?",isPhone.value,"非手机?",isNotPhone.value);

import { useRuntimeConfig, useFetch, navigateTo } from 'nuxt/app'

console.log("测试useRuntimeConfig",useRuntimeConfig().public)
// console.log("测试2useRuntimeConfig",useRuntimeConfig().public.apiBase,useRuntimeConfig().public.siteName)
</script>
<style scoped>

</style>
