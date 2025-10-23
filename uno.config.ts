// uno.config.ts
import {
    defineConfig,
    presetWind3,
    presetAttributify,
    presetIcons,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

export default defineConfig({
    presets: [
        presetWind3(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
    ],
    transformers: [
        transformerDirectives(), // 启用 @apply 指令支持
        transformerVariantGroup(), // 启用 variant group 功能
    ],
    shortcuts: [
        // 响应式快捷方式
        ['btn', 'px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors'],
        ['container', 'w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8'],
        ['section', 'py-12 md:py-16 lg:py-20'],
    ],
    theme: {
        breakpoints: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        }
    },
})