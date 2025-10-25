<template>
  <div class="home-container">
    <div class="home-carousel">
      <carousel :images="topCarouselList" dots-position="bottom"></carousel>
    </div>
<!--  五位一体标题  -->
    <div class="five-one-title">
      <span class="vice-title font-signature text-#CFC6C7 text-[10px]">Five-in-One health system</span>
      <span class="main-title text-#500404 text-2xl">五位一体健康体系</span>
    </div>
    <!-- 五位一体图片热点区域 -->
    <div class="home-five-one pos-relative">
      <img
          src="/home/five_one.png"
          alt="五位一体概览图"
          class="w-full h-auto object-contain"
      >

      <!-- 顶部居中热点 -->
      <div
          class="img-hotspot top-center"
          @click="handleHotspotClick('top-center')"
      >
        <div class="hotspot-label">顶部功能区</div>
      </div>

      <!-- 垂直居中左右分区 -->
      <div class="img-hotspot-group vertical-center">
        <div
            class="img-hotspot left-half"
            @click="handleHotspotClick('vertical-left')"
        >
          <div class="hotspot-label">左侧功能区</div>
        </div>
        <div
            class="img-hotspot right-half"
            @click="handleHotspotClick('vertical-right')"
        >
          <div class="hotspot-label">右侧功能区</div>
        </div>
      </div>

      <!-- 底部左右分区 -->
      <div class="img-hotspot-group bottom-group">
        <div
            class="img-hotspot left-half"
            @click="handleHotspotClick('bottom-left')"
        >
          <div class="hotspot-label">左下功能区</div>
        </div>
        <div
            class="img-hotspot right-half"
            @click="handleHotspotClick('bottom-right')"
        >
          <div class="hotspot-label">右下功能区</div>
        </div>
      </div>
    </div>
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
        <img src="/home/public_benefit.png" alt="澜心社公益" class="mt-5"/>
      </div>
    </div>
    <div class="home-offline-store">123</div>
    <div class="home-address">123</div>
    <div class="home-log">123</div>
  </div>
</template>
<script setup lang="ts">
const topCarouselList = ref(
    [
        '/home/carousel/top_carousel_1.jpg',
        '/home/carousel/top_carousel_1.jpg',
    ]
)
const handleHotspotClick = (area: string) => {
  console.log(' 点击热点区域:', area)
  // 这里添加具体的点击处理逻辑
  switch(area) {
    case 'top-center':
      // 顶部功能处理
      console.log('生理健康')
      break
    case 'vertical-left':
      // 垂直左侧处理
      console.log('关系健康')
      break
    case 'vertical-right':
      // 垂直左侧处理
      console.log('心里健康')
      break
    case 'bottom-left':
      // 垂直左侧处理
      console.log('行为健康')
      break
    case 'bottom-right':
      // 垂直左侧处理
      console.log('感知健康')
      break
      // 其他区域处理...
  }
}
</script>
<style scoped lang="scss">
.five-one-title{
  margin-top: 40px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.home-five-one {
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
/* 热点通用样式 */
.img-hotspot {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3);
  border: 2px dashed rgba(0, 0, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    .hotspot-label {
      opacity: 1;
    }
  }
}

.hotspot-label {
  opacity: 0;
  position: absolute;
  background: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  transition: opacity 0.3s;
}

/* 顶部居中热点 */
.top-center {
  top: 4%;
  left: 50%;
  transform: translateX(-50%);
  width: 26%;
  height: 28%;
}

/* 垂直居中热点组 */
.vertical-center {
  position: absolute;
  top: 44%;
  left: 10%;
  right: 10%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  height: 30%;

  .left-half {
    width: 32%;
    height: 100%;
    left: 0;
  }

  .right-half {
    width: 32%;
    height: 100%;
    right: 0;
  }
}

/* 底部热点组 */
.bottom-group {
  position: absolute;
  bottom: 4%;
  left: 20%;
  right: 20%;
  display: flex;
  justify-content: space-between;
  height: 30%;

  .left-half {
    width: 44%;
    height: 100%;
    left: 0;
  }

  .right-half {
    width: 44%;
    height: 100%;
    right: 0;
  }
}

/* 开发时显示热点，生产环境可移除 */
.img-hotspot {
  &:hover {
    background-color: rgba(0, 255, 0, 0.2);
  }
}
.home-content{
  margin-top: 80px;
  padding-left: 20px;
  padding-right: 20px;
  .home-content-title{
    margin-top: 40px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
}
</style>
