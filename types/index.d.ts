import { useMessage } from '../composables/useMessage'

declare module '#app' {
    interface NuxtApp {
        $message: ReturnType<typeof useMessage>
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $message: ReturnType<typeof useMessage>
    }
}

export {}