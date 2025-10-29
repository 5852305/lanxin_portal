// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/device',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/image',
    'nuxtjs-naive-ui'
  ],
  // 解决CommonJS冲突
  build: {
    transpile: [
      'vueuc', // Naive UI的依赖
      'date-fns',
      'vue3-clipboard',
    ]
  },
  vite: {
    // 启用现代构建模式
    build: {
      target: 'esnext',
    },
    optimizeDeps: {
      include: [
        'vueuc',
        'date-fns-tz',
        'lodash-es'
      ]
    },
    plugins: [
    ]
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // 开发服务器配置
  devServer: {
    port: 3001
  },
  // 动态配置示例
  runtimeConfig: {
    // 私有变量，仅服务端可用
    apiSecret: process.env.API_SECRET,
    // 公共变量，客户端和服务端都可用
    public: {
      siteName: process.env.NUXT_PUBLIC_SITE_NAME,
      test: process.env.test,
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      debugMode: process.env.NUXT_PUBLIC_DEBUG_MODE === 'true',
      site: {
        name: process.env.NUXT_PUBLIC_SITE_NAME,
        description: process.env.NUXT_PUBLIC_SITE_DESCRIPTION
      }
    }
  },
  plugins: [
  ],
  // UnoCSS 配置
  unocss: {
    configFile: 'uno.config.ts'
  },
  // SEO 相关配置
  site: {
    url: 'https://your-domain.com',
    name: 'Lanxin Portal',
    description: '门户网站 - 提供全面的信息服务',
    defaultLocale: 'zh-CN',
    // 可选：URL结尾斜杠配置
    trailingSlash: true,
  },
  sitemap: {
    exclude: ['/admin/**'],       // 排除后台路径
    autoLastmod: true,            // 自动生成最后修改时间
    xsl: false,                   // 禁用XSL样式表
    credits: false                // 隐藏模块版权信息
  },

  // 响应式断点配置
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      charset: 'utf-8',
      meta: [
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'  }
      ]
    }
  },
  image: {
    domains: ['your-cdn-domain.com'],
    presets: {
      default: {
        modifiers: {
          quality: '80',
          format: 'webp'
        }
      }
    }
  }

})