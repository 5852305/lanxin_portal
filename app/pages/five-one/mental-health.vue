<!--心理健康-->
<template>
  <FiveOneCourseList :course-list="imgList" main-title="心理健康" sub-title="Mental Health"/>
</template>

<script setup lang="ts">
const imgList = ref([
  {src:"/five-one/mental/mental1.png", alt:"青春期儿童性教育"},
  {src:"/five-one/mental/mental2.png", alt:"智慧父母·放飞青春"},
])
</script>

<style scoped>

</style>