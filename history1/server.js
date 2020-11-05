// vue vue-server-renderer
// koa @koa/router

const Vue = require('vue')
const VueServerRenderer = require('vue-server-renderer') // vue服务端渲染得脚本
const fs = require('fs') 
const path = require('path') 


const vm = new Vue({
  data() {
    return {
      name: 'jack',
      age: 18
    }
  },
  template: `<div>{{name}} 今年 {{age}} 岁</div>`
})
const koa = require('koa') 
const Router = require('@koa/router')

const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8')

const render = VueServerRenderer.createRenderer({
  template // 采用哪个模板去渲染
})
let app = new koa() // 产生一个app实例
let router = new Router() // 产生一个路由实例

router.get('/', async (ctx)=>{
  ctx.body = await render.renderToString(vm)
})

app.use(router.routes()) // 将路由注册到应用上
app.listen(30000) // 监听3000 端口

// npm install nodemon -g (node monitor 监视器) 
