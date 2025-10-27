<!--行为健康-->
<template>
  <FiveOneCourseList :course-list="imgList" main-title="行为健康" sub-title="Behavioral Health"/>
</template>

<script setup lang="ts">
const imgList = ref([
  {src:"/five-one/behavioral/behavioral1.png", alt:"教练认证班"},
  {src:"/five-one/behavioral/behavioral2.png", alt:"魅力导师班"},
  {src:"/five-one/behavioral/behavioral3.png", alt:"盆底与性工作坊"},
  {src:"/five-one/behavioral/behavioral4.png", alt:"女性秘密肌体雕术课"},
])
</script>

<style scoped>

</style>