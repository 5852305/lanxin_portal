<template>
  <!-- 包裹所有页面内容 -->
  <n-message-provider>
    <n-notification-provider> <!-- 如需useNotification，需同时添加 -->
      <NuxtLayout :if-show-footer="false">
        <NuxtRouteAnnouncer />
        <NuxtPage class="font-jiangcheng"/>
        <template v-slot:header>
          <AppHeader class="font-jiangcheng"/>
        </template>
      </NuxtLayout>
    </n-notification-provider>
  </n-message-provider>

</template>
<script setup lang="ts">
import '@unocss/reset/tailwind.css'
console.log(' 别名 ~ 指向:', import.meta.url)  // 应输出项目根目录下的路径

// const { isMobile, isIos, isDesktop } = useDevice()
// console.log("设备类型",isMobile,isIos,isDesktop);
const { isPhone, isNotPhone } = useDeviceUtils()
console.log("手机?",isPhone.value,"非手机24678?",isNotPhone.value);

import { useRuntimeConfig, useFetch, navigateTo } from 'nuxt/app'

console.log("测试useRuntimeConfig",useRuntimeConfig().public)
// console.log("测试2useRuntimeConfig",useRuntimeConfig().public.apiBase,useRuntimeConfig().public.siteName)
</script>
<style scoped>

</style>
