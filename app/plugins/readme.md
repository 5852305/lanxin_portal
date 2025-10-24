plugins

Copy page

Nuxt 提供了一个插件系统，用于在创建 Vue 应用时使用 Vue 插件等功能。
Nuxt 会自动读取 plugins/ 目录中的文件，并在创建 Vue 应用时加载它们。

所有插件都会被自动注册，你无需在 nuxt.config 中单独添加它们。
你可以在文件名中使用 .server 或 .client 后缀，仅在服务端或客户端加载插件。