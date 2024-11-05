# 实现Icon组件
## 计算属性computed()
vue推荐使用计算属性来描述依赖响应式状态的复杂逻辑，计算属性带有缓存特性，基于响应式依赖被缓存，仅会在响应式依赖更新时才重新计算。
`computed()`方法接受一个getter函数，返回一个计算属性ref，可以通过`.value`访问计算结果，计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 `.value`。
[计算属性](https://cn.vuejs.org/guide/essentials/computed)
## 类型约束与基础实现

