<template>
  <div class="main-sub-title-container flex flex-col justify-center items-center">
    <div class="sub-title font-signature" :class="subTitleClass">
      {{subTitle}}
    </div>
    <div class="main-title" :class="mainTitleClass">
      {{mainTitle}}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  mainTitle?: string
  subTitle?: string
  mainTitleClass?: string
  subTitleClass?: string
}>(), {
  mainTitle: "主要标题",
  subTitle: "副标题rand Introduction of Lanxi",
  mainTitleClass: "font-bold text-lg",
  subTitleClass: "text-[14px]",
})
</script>

<style scoped>

</style>