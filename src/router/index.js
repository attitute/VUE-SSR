import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (path) {
    return () => import(`../components/${path}`);
}


// 服务端每次执行 都要创建一个全新的实例
export default ()=>{
    const router = new VueRouter({
        routes: [
            {
                path: '/',
                component: load('Foo'),
            },
            {
                path: '/Bar',
                component: load('Bar'),
            }
        ]
    })
    return router
}
