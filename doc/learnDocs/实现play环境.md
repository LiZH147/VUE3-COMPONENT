直接利用vite创建项目.
在根目录中执行`pnpm create vite play --template vue-ts`
## 为`.vue`文件做声明
在根目录下新建`typings/vue-shim.d.ts`文件
```ts
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
```
## 更改全局dev命令
在根目录下的`package.json`中的`scripts`属性中添加`"dev": "pnpm -C play dev"`
