<template>
  <div class="home-offline-store">
    <div class="home-offline-store-title flex flex-col justify-center items-center">
      <span class="vice-title font-signature text-#CFC6C7 text-[10px]">offline store</span>
      <span class="main-title text-#500404 text-2xl">线下门店</span>
    </div>
    <div class="store-list rounded-[8px] mt-4">
      <carousel :images="offlineStoreList" dots-position="bottom"></carousel>
    </div>
    <div class="home-address mt-4">
      <img src="/home/offline_store/map.png" alt="地图"/>
      <div class="text-[20px] flex flex-row items-center mt-2">
        <MapMarkerAlt class="w-18px h-18px text-#3E3A39"/>
        澜心疗愈生活馆旗舰店
      </div>
      <div class="ml-4 text-[14px]">四川省成都市武侯区双楠路286号201室</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {MapMarkerAlt} from "@vicons/fa";

const offlineStoreList = ref(
    [
      '/home/offline_store/1.png',
      '/home/offline_store/2.png',
      '/home/offline_store/3.png',
      '/home/offline_store/4.png',
      '/home/offline_store/5.png',
      '/home/offline_store/6.png',
      '/home/offline_store/7.png',
    ]
)
</script>

<style scoped lang="scss">
.home-offline-store{
  :deep(.store-list  img){
    border-radius: 8px;
  }
}
</style>