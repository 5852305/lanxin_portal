import { defineNuxtPlugin } from '#app'
import { createApp, h } from 'vue'
import { useMessage } from '../composables/useMessage'
import LxMessage from '../components/LxMessage.vue'

export default defineNuxtPlugin((nuxtApp) => {
    // Only initialize if not already done
    if (!nuxtApp.$message) {
        const message = useMessage()

        // Create message container
        const container = document.createElement('div')
        container.id  = 'lx-messages-container'
        document.body.appendChild(container)

        // Create message app
        const messageApp = createApp({
            setup() {
                return () => h('div', { class: 'fixed top-0 right-0 z-50' },
                    message.getMessages().map(msg  =>
                        h(LxMessage, {
                            key: msg.id,
                            message: msg.option.message,
                            type: msg.option.type,
                            duration: msg.option.duration
                        })
                    )
                )
            }
        })

        messageApp.mount(container)

        // Provide message only once
        nuxtApp.provide('message',  message)

        // Cleanup on unmount
        nuxtApp.hook('app:beforeMount',  () => {
            messageApp.unmount()
            document.body.removeChild(container)
        })
    }
})