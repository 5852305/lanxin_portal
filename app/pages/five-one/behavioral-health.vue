<!--行为健康-->
<template>
  <FiveOneCourseList :course-list="imgList" main-title="行为健康" sub-title="Behavioral Health"/>
</template>

<script setup lang="ts">
const imgList = ref([
  {src:"/five-one/behavioral/behavioral1.png", alt:"教练认证班",to:"/five-one/detail/behavioral-coach"},
  {src:"/five-one/behavioral/behavioral2.png", alt:"魅力导师班",to:"/five-one/detail/behavioral-coach"},
  {src:"/five-one/behavioral/behavioral3.png", alt:"盆底与性工作坊",to:"/five-one/detail/behavioral-coach"},
  {src:"/five-one/behavioral/behavioral4.png", alt:"女性秘密肌体雕术课",to:"/five-one/detail/behavioral-coach"},
])
</script>

<style scoped>

</style>