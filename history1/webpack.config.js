// 默认运行webpack命令会吊用此文件 webpack得配置文件
// webpack.config.js

// webpack webapck-cli（解析用户传递得参数） webpack-dev-server (webpack服务) loader(转换) +  pulign（插件）
// vue-loader vue-style-loader(支持服务端渲染得) css-loader vue-template-compiler(把模板编译成render函数)
// @babel/core @babel/preset-env babel-loader
// html-webpack-plugin 

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (dir)=>{
    return path.resolve(__dirname, dir)
}

module.exports = {
    entry: resolve('./src/app.js'),
    output: {
        filename: 'bundle.js',
        path: resolve('dist'),
    },
    resolve: { // 解析文件时 按照以下顺序查找后缀
        extensions: ['.js','.vue','.css','.jsx']
    },
    module: {
        // 针对不同模块做处理
        rules:[
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                use:{
                    options: { // 告诉js 文件需要通过es6->es5的插件转换
                        presets: ['@babel/preset-env']
                    },
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('./public/index.html')
        })
    ]
}