import { ref } from 'vue'

type MessageType = 'success' | 'error' | 'warning' | 'info'
type MessageOption = {
    type: MessageType
    message: string
    duration?: number
}

const messages = ref<{ id: number; option: MessageOption }[]>([])
let idCounter = 0

export const useMessage = () => {
    const showMessage = (option: MessageOption) => {
        const id = idCounter++
        messages.value.push({  id, option })

        setTimeout(() => {
            messages.value  = messages.value.filter(msg  => msg.id  !== id)
        }, option.duration  || 3000)
    }

    return {
        success: (msg: string, duration?: number) =>
            showMessage({ type: 'success', message: msg, duration }),
        error: (msg: string, duration?: number) =>
            showMessage({ type: 'error', message: msg, duration }),
        warning: (msg: string, duration?: number) =>
            showMessage({ type: 'warning', message: msg, duration }),
        info: (msg: string, duration?: number) =>
            showMessage({ type: 'info', message: msg, duration }),
        getMessages: () => messages.value,
        closeMessage: (id: number) => {
            messages.value  = messages.value.filter(msg  => msg.id  !== id)
        }
    }
}