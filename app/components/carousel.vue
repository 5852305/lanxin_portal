<template>
  <div
      class="relative w-full h-full overflow-hidden touch-none"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
  >
    <!-- 轮播图片容器 -->
    <div
        ref="slider"
        class="flex transition-transform duration-300 ease-in-out select-none"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
          v-for="(img, index) in images"
          :key="index"
          class="flex-shrink-0 w-full h-full"
      >
        <img
            :src="img"
            class="w-full h-full object-cover pointer-events-none"
            :alt="`Slide ${index + 1}`"
        />
      </div>
    </div>

    <!-- 指示器 -->
    <div
        class="absolute flex gap-2 z-10"
        :class="{
        'bottom-4 left-1/2 -translate-x-1/2': dotsPosition === 'bottom',
        'right-4 top-1/2 -translate-y-1/2 flex-col': dotsPosition === 'right'
      }"
    >
      <button
          v-for="(_, index) in images"
          :key="index"
          class="w-2 h-2 rounded-full transition-all"
          :class="{
          'bg-white': currentIndex === index,
          'bg-white/50': currentIndex !== index
        }"
          @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true,
    validator: (value: string[]) => value.length  > 0
  },
  dotsPosition: {
    type: String as () => 'bottom' | 'right',
    default: 'bottom'
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3000
  },
  swipeThreshold: {
    type: Number,
    default: 50 // 滑动阈值（像素）
  }
})

const currentIndex = ref(0)
const slider = ref<HTMLElement | null>(null)
let timer: NodeJS.Timeout | null = null

// 触摸控制相关
const touchStartX = ref(0)
const touchEndX = ref(0)
const isDragging = ref(false)

const goToSlide = (index: number) => {
  currentIndex.value  = index
}

const nextSlide = () => {
  currentIndex.value  = (currentIndex.value  + 1) % props.images.length
}

const prevSlide = () => {
  currentIndex.value  = (currentIndex.value  - 1 + props.images.length)  % props.images.length
}

const startAutoplay = () => {
  if (props.autoplay)  {
    timer = setInterval(nextSlide, props.interval)
  }
}

const stopAutoplay = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

// 触摸事件处理
const handleTouchStart = (e: TouchEvent) => {
  stopAutoplay()
  touchStartX.value  = e.touches?.[0]?.clientX  ?? 0
  isDragging.value  = true
}

const handleTouchMove = (e: TouchEvent) => {
  if (!isDragging.value)  return
  touchEndX.value  = e.touches?.[0]?.clientX  ?? 0

  // 实时跟随手指移动效果
  if (slider.value)  {
    const deltaX = touchEndX.value  - touchStartX.value
    slider.value.style.transition  = 'none'
    slider.value.style.transform  = `translateX(calc(-${currentIndex.value  * 100}% + ${deltaX}px))`
  }
}

const handleTouchEnd = () => {
  if (!isDragging.value)  return
  isDragging.value  = false

  if (slider.value)  {
    slider.value.style.transition  = 'transform 300ms ease-in-out'
  }

  const deltaX = touchEndX.value  - touchStartX.value

  // 判断滑动方向
  if (Math.abs(deltaX)  > props.swipeThreshold)  {
    if (deltaX > 0) {
      prevSlide() // 向右滑动
    } else {
      nextSlide() // 向左滑动
    }
  } else {
    // 未达到阈值，回到当前幻灯片
    goToSlide(currentIndex.value)
  }

  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<style scoped>
/* 防止图片拖拽 */
img {
  user-select: none;
  -webkit-user-drag: none;
}

/* 滑动时的临时样式 */
.touch-none {
  touch-action: pan-y;
}
</style>