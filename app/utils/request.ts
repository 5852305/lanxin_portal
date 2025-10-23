// utils/request.ts

type RequestOptions = Parameters<typeof $fetch>[1]

// 创建带拦截器的实例
const customFetch = $fetch.create({
    baseURL: '/api',
    async onRequest({ options }) {
        // 自动注入 token
        const { token } = {token:"test"}
        let headers = {};
        if (token)  {
            headers  = {
                "Authorization": `Bearer ${token}`
            }
        }
        options.headers = {...options.headers, ...headers }
    },
    onResponse({ response }) {
        // 处理业务逻辑错误
        if (response._data?.code !== 200) {
            throw new Error(response._data?.message || 'Request failed')
        }
    },
    onResponseError({ response }) {
        // 处理 HTTP 错误
        switch (response.status)  {
            case 401:
                navigateTo('/login')
                break
            case 403:
                navigateTo('/403')
                break
            case 404:
                navigateTo('/404')
                break
            default:
                throw new Error(response.statusText  || 'Request failed')
        }
    }
})
export const request = {
    async call<T = any>(url: string, options?: RequestOptions): Promise<T> {
        return customFetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers
            }
        })
    },
    get<T = any>(url: string, params?: object, options?: RequestOptions) {
        return this.call<T>(url,  { method: 'GET', params, ...options })
    },
    post<T = any>(url: string, body?: object, options?: RequestOptions) {
        return this.call<T>(url,  { method: 'POST', body, ...options })
    }
}
