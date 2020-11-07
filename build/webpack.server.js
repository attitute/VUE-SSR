
// 通过入口 打包出一份代码来， 代码给node来使用

const base = require('./webpack.base')
const merge = require('webpack-merge').default
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = (dir)=>{
    return path.resolve(__dirname, dir)
}


module.exports = merge(base, {
    entry: {
        server: resolve('../src/server-entry.js')
    },
    target: 'node', // 给node使用
    output: {
        libraryTarget: 'commonjs2' // 指定导出方式 module.exports = {}
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.ssr.html',
            client: 'client.bundle.js',
            template: resolve('../public/index.ssr.html'),
            minify: false, // 不压缩 不删除注释
            excludeChunks:['server'] // 排除引入文件
        })
    ]
})


// 后端打包的结果决定html的内容 前端打包的结果决定事件。

