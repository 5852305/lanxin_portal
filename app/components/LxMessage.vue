<!--消息提醒-->
<template>
  <ClientOnly>
    <Transition name="fade">
      <div
          v-if="visible"
          class="fixed top-4 right-4 z-50 max-w-xs p-4 rounded shadow-lg"
          :class="typeClasses"
      >
        <div class="flex items-center gap-3">
          <Icon :name="typeIcon" class="text-xl" />
          <span>{{ message }}</span>
        </div>
        <button @click="doClose" class="ml-auto">关闭</button>
      </div>
    </Transition>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

type MessageType = 'success' | 'error' | 'warning' | 'info';

const props = defineProps<{
  message: string;
  type: MessageType;
  duration?: number;
}>();

const visible = ref(true);
const typeClasses = computed(() => ({
  'bg-green-100 text-green-800': props.type  === 'success',
  'bg-red-100 text-red-800': props.type  === 'error',
  'bg-yellow-100 text-yellow-800': props.type  === 'warning',
  'bg-blue-100 text-blue-800': props.type  === 'info',
}));

const typeIcon = computed(() => ({
  success: 'i-carbon-checkmark-filled',
  error: 'i-carbon-error-filled',
  warning: 'i-carbon-warning-filled',
  info: 'i-carbon-information-filled',
}[props.type]));

setTimeout(() => visible.value  = false, props.duration  || 5000);
const doClose = () => {
  visible.value = false;
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>