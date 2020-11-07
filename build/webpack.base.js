
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = (dir)=>{
    return path.resolve(__dirname, dir)
}

module.exports = {
    output: {
        filename: '[name].bundle.js',
        path: resolve('../dist'),
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
                use: [
                    {
                        loader: 'vue-style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
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
        new VueLoaderPlugin()
    ]
}