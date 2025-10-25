<template>
  <div class="home-content">
    <div class="home-content-title">
      <span class="vice-title font-signature text-#CFC6C7 text-[10px]">Brand Introduction of Lanxin Club</span>
      <span class="main-title text-#500404 text-2xl">澜心社品牌</span>
    </div>
    <div class="brand_desc w-full mt-5">
      <img src="/home/brand_desc.png" alt="澜心社品牌" class="w-full"/>
    </div>
    <div class="core_team w-full mt-5 bg-#EFE8E2 flex flex-row flex-nowrap rounded-[8px] pos-relative text-[clamp(12px,4vw,48px)]">
      <img src="/home/core_team.png"  alt="核心团队" class="w-full h-auto"/>
      <!-- 使用 transform 精确定位 -->
      <div class="text-#B79780 pos-absolute left-[60%] top-[20%] -translate-x-1/2 font-bold whitespace-nowrap">
        CORE TEAM
      </div>
      <div class="text-#510505 pos-absolute left-[60%] top-[36%] -translate-x-1/2 font-bold whitespace-nowrap">
        核心团队
      </div>
      <div class="text-#B79780 pos-absolute left-[60%] top-[56%] -translate-x-1/2 whitespace-nowrap">
        专注女性身心健康服务
      </div>
      <div class="text-#B79780 pos-absolute left-[60%] top-[66%] -translate-x-1/2 whitespace-nowrap">
        专业化多维团队
      </div>
    </div>
    <div class="brand_affect bg-#B79780 rounded-[8px] mt-5 p4 w-full flex flex-col items-center text-[clamp(12px,4vw,48px)]">
      <div class="text-[#fff] mt-[10px]">BRAND INFLUENCE</div>
      <div class="text-[#fff]">品牌影响力</div>
      <img src="/home/brand_affect.png" alt="品牌影响力" class="w-full h-auto mt-[20px] mb-[10px]"/>
    </div>
    <div class="win_win mt-5 bg-#EFE8E2 flex flex-row items-center">
      <img src="/home/win_win.png" alt="合作共赢" class="w-[36%] pt-2 pb-2 pl-2"/>
      <div class="text-#B79780 h-[40%] ml-[14%] text-[clamp(12px,4vw,48px)]">
        <div>WIN-WIN BRAND</div>
        <div>COOPERATION</div>
        <div class="text-#510505 font-bold">品牌合作共赢</div>
      </div>
    </div>
    <div class="public_benefit bg-#B79780 mt-5 rounded-[8px] flex flex-col flex-nowrap items-center p-4">
      <div class="h-[1%] text-[#fff]">
        <div>PUBLIC WELFARE CONCEPT</div>
        <div class="text-center font-bold">澜心社公益</div>
      </div>
      <img src="/home/public_benefit.png" alt="澜心社公益" class="mt-2"/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.home-content{
  .home-content-title{
    margin-top: 40px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
}
</style>