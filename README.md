# xmes-client

xmes-基于 Django+vue3 的 rbac 权限管理系统

基于 [vue-pure-admin](https://github.com/pure-admin/vue-pure-admin) 二次开发

Django 做后端服务
[xmes-server](https://github.com/nineaiyu/xmes-server)

### 在线预览

[https://xmes.dvcloud.xin/](https://xmes.dvcloud.xin/)
账号密码：admin/admin123

## 开发文档

[https://docs.dvcloud.xin/](https://docs.dvcloud.xin/)

## docker 构建

修改 api 配置文件`.env.production`，将 api 域名修改为自己服务器，然后进行构建

```shell
docker compose up xmes-client-build
```

### docker 启动

```shell
docker compose up xmes-client-prod
```

然后浏览器 http://localhost:8891 进行访问

# 本地开发运行，记得在`vite.config.ts` 添加proxy代理，要不然无法访问api服务

```ts
      proxy: {
        "/api": {
          target: "http://127.0.0.1:8896",
          changeOrigin: true,
          rewrite: path => path
        },
        "/media": {
          target: "http://127.0.0.1:8896",
          changeOrigin: true,
          rewrite: path => path
        },
        "/ws": {
          target: "ws://127.0.0.1:8896"
        },
        "/api-docs": {
          target: "http://127.0.0.1:8896",
          changeOrigin: true,
          rewrite: path => path
        }
      },
```
