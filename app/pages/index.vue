<template>
  <div class="home-container">
    <div class="home-carousel">
      <carousel :images="topCarouselList" dots-position="bottom"></carousel>
    </div>
    <div class="home-main pl-5 pr-5">
      <HomeFiveOne class="mt-5"/>
      <HomeContent class="mt-5"/>
      <HomeOfflineStore class="mt-10"/>
    </div>
    <HomeBottomInfo class="mt-10"/>
  </div>
</template>
<script setup lang="ts">

const topCarouselList = ref(
    [
        '/home/carousel/top_carousel_1.jpg',
        '/home/carousel/top_carousel_1.jpg',
    ]
)

</script>
<style scoped lang="scss">

</style>
