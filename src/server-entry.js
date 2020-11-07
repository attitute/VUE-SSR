import createApp from './app'



export default ({url})=>{
    const {app, router} = createApp()

    console.log(url)
    
    return app // createRenderer().renderToString(vm)
}



