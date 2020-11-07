import Vue from 'vue'
import App from './App.vue'
import createRouter from './router/index.js'



// 服务端每次执行 都要创建一个全新的实例
export default ()=>{
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })

  return {app, router} // 后续会导出 router vuex相关的
}


// 导出函数的意义
// 1. 以前代码在前端跑的时候 每个客户端都拥有一个独立的实例
// 2. 服务端 每次客户端访问都要产生一个新的实列（如果没有一个新的实例那就乱套了）  这里导出一个函数

