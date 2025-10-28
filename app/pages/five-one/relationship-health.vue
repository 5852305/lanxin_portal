<!--关系健康-->
<template>
  <FiveOneCourseList :course-list="imgList" main-title="关系健康" sub-title="Relationship Health"/>
</template>

<script setup lang="ts">
const imgList = ref([
  {src:"/five-one/relationship/relationship1.png", alt:"情趣女王",to:"/five-one/detail/relationship-king"},
  {src:"/five-one/relationship/relationship2.png", alt:"密宗海外情侣TC",to:"/five-one/detail/relationship-vajrayana-couple"},
  {src:"/five-one/relationship/relationship3.png", alt:"丁丁按摩操",to:"/five-one/detail/relationship-parturition"},
  {src:"/five-one/relationship/relationship4.png", alt:"情趣体位课",to:"/five-one/detail/relationship-breed"},
])
</script>

<style scoped>

</style>