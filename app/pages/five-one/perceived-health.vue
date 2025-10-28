<!--感知健康-->
<template>
    <FiveOneCourseList :course-list="imgList" main-title="感知健康" sub-title="Perceived Health"/>
</template>

<script setup lang="ts">
const imgList = ref([
  {src:"/five-one/perceived/perceived1.png", alt:"密宗TC觉醒系列工作坊",to:"/five-one/detail/perceived-vajrayana-work"},
  {src:"/five-one/perceived/perceived2.png", alt:"密宗TC觉醒之神圣的爱",to:"/five-one/detail/perceived-vajrayana-love"},
  {src:"/five-one/perceived/perceived3.png", alt:"生命绽放·疗愈之旅",to:"/five-one/detail/perceived-life"},
  {src:"/five-one/perceived/perceived4.png", alt:"美丽的奇迹",to:"/five-one/detail/perceived-beauty-miracle"},
])
</script>

<style scoped>

</style>