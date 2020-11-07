
const VueServerRenderer = require('vue-server-renderer') // vue服务端渲染得脚本
const fs = require('fs') 
const path = require('path') 
const static = require('koa-static')


const koa = require('koa') 
const Router = require('@koa/router')

const serverBundle = fs.readFileSync(path.resolve(__dirname, 'dist/server.bundle.js'), 'utf8')
const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.ssr.html'), 'utf8')

const render = VueServerRenderer.createBundleRenderer(serverBundle, {
  template // 采用哪个模板去渲染
})
let app = new koa() // 产生一个app实例
let router = new Router() // 产生一个路由实例

app.use(router.routes()) // 将路由注册到应用上
// router.get('/', async (ctx)=>{
//   ctx.body = await new Promise((resolve, reject)=>{ // 虽然本身是promise 但是async await不能解析样式 只能通过回调得方式
//       render.renderToString((err,html)=>{
//         resolve(html)
//       })
//     })
// })

// 当访问任意路径时 都可以匹配到
router.get('/(.*)', async ctx => {
  ctx.body = await new Promise((resolve,reject)=>{
    render.renderToString({url: ctx.url}, (err,html)=>{
      resolve(html)
    })
  })
})

// app.use(static(__dirname)) // 使用静态服务插件
app.listen(10000) // 监听3000 端口

// npm install nodemon -g (node monitor 监视器) 
