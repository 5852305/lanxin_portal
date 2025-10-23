// composables/useDeviceUtils.ts  或 utils/device.ts

import type { Ref } from 'vue'

export interface DeviceUtils {
    userAgent: string
    isDesktop: Ref<boolean>
    isIos: Ref<boolean>
    isAndroid: Ref<boolean>
    isMobile: Ref<boolean>
    isTablet: Ref<boolean>
    isWindows: Ref<boolean>
    isMacOS: Ref<boolean>
    isSafari: Ref<boolean>
    isChrome: Ref<boolean>
    isFirefox: Ref<boolean>
    isPhone: Ref<boolean>
    isNotPhone: Ref<boolean>
}

export const useDeviceUtils = (): DeviceUtils => {
    const device = useDevice()
    const isPhone = computed(() => device.isMobile  && !device.isTablet)

    return {
        userAgent: device.userAgent,
        isDesktop: computed(() => device.isDesktop),
        isIos: computed(() => device.isIos),
        isAndroid: computed(() => device.isAndroid),
        isMobile: computed(() => device.isMobile),
        isTablet: computed(() => device.isTablet),
        isWindows: computed(() => device.isWindows),
        isMacOS: computed(() => device.isMacOS),
        isSafari: computed(() => device.isSafari),
        isChrome: computed(() => device.isChrome),
        isFirefox: computed(() => device.isFirefox),
        isPhone,
        isNotPhone: computed(() => !isPhone.value)  // 非手机端（包括平板和桌面）
    }
}