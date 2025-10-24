<template>
  <div class="relative w-full h-full overflow-hidden">
    <!-- 轮播图片容器 -->
    <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
          v-for="(img, index) in images"
          :key="index"
          class="flex-shrink-0 w-full h-full"
      >
        <img
            :src="img"
            class="w-full h-full object-cover"
            :alt="`Slide ${index + 1}`"
        />
      </div>
    </div>

    <!-- 指示器 -->
    <div
        class="absolute flex gap-2"
        :class="{
        'bottom-4 left-1/2 -translate-x-1/2': dotsPosition === 'bottom',
        'right-4 top-1/2 -translate-y-1/2 flex-col': dotsPosition === 'right'
      }"
    >
      <button
          v-for="(_, index) in images"
          :key="index"
          class="w-3 h-3 rounded-full transition-all"
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
  }
})

const currentIndex = ref(0)
let timer: NodeJS.Timeout | null = null

const goToSlide = (index: number) => {
  currentIndex.value  = index
}

const nextSlide = () => {
  currentIndex.value  = (currentIndex.value  + 1) % props.images.length
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

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<style scoped>
/* 确保图片容器宽高比
img {
  aspect-ratio: 16/9;
}*/
</style>