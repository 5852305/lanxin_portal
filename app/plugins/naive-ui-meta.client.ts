// plugins/naive-ui-meta.client.ts
export default defineNuxtPlugin((nuxtApp) => {
    // 仅在客户端浏览器环境执行
    if (import.meta.client)  {
        // 动态创建并插入 meta 标签到 <head>
        const meta = document.createElement('meta');
        meta.name  = 'naive-ui-style';
        // 插入到 <head> 的最前面，确保 NaiveUI 样式插入在 meta 之前
        // document.head.insertBefore(meta,  document.head.firstChild);
        document.head.appendChild(meta);
    }
});