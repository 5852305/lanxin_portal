<template>
  <div class="home-container">
    <div class="home-carousel">
      <carousel :images="topCarouselList" dots-position="right"></carousel>
    </div>
<!--  五位一体标题  -->
    <div class="five-one-title">
      <span class="vice-title font-signature text-#CFC6C7 text-[10px]">FiveOneHealthSystem</span>
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
    </div>
    <div class="home-offline-store">123</div>
    <div class="home-address">123</div>
    <div class="home-log">123</div>
  </div>
</template>
<script setup lang="ts">
const topCarouselList = ref(
    ['/home/carousel/top_carousel_1.jpg']
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
<style scoped >
.five-one-title{
  margin-top: 40px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.home-five-one {
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
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 20%;
}

/* 垂直居中热点组 */
.vertical-center {
  position: absolute;
  top: 44%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  height: 20%;

  .left-half {
    width: 48%;
    height: 100%;
    left: 0;
  }

  .right-half {
    width: 48%;
    height: 100%;
    right: 0;
  }
}

/* 底部热点组 */
.bottom-group {
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: 20%;

  .left-half {
    width: 48%;
    height: 100%;
    left: 0;
  }

  .right-half {
    width: 48%;
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
  .home-content-title{
    margin-top: 40px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
}
</style>
