// types/unocss.d.ts
import { UnocssNuxtOptions } from '@unocss/nuxt'

declare module '@nuxt/schema' {
    interface NuxtConfig {
        unocss?: UnocssNuxtOptions
    }
}