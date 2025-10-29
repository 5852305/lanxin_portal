<!--生理健康-->
<template>
  <FiveOneCourseList :course-list="imgList" main-title="生理健康" sub-title="Physiological Health"/>
</template>

<script setup lang="ts">
const imgList = ref([
  {src:"/five-one/physiological/physiological1.png", alt:"七天紧致V动力",to:"/five-one/detail/physiological-impetus"},
  {src:"/five-one/physiological/physiological2.png", alt:"元气女人训练营",to:"/five-one/detail/physiological-archaeus"},
  {src:"/five-one/physiological/physiological3.png", alt:"驻颜焕活排毒营",to:"/five-one/detail/physiological-face"},
  {src:"/five-one/physiological/physiological4.png", alt:"七天盆底力量训练"},
])
</script>

<style scoped>

</style>