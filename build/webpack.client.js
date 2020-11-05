const base = require('./webpack.base')
const merge = require('webpack-merge').default
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = (dir)=>{
    return path.resolve(__dirname, dir)
}

// mergeOptions  webpack-merge

module.exports = merge(base, {
    entry: {
        client: resolve('../src/client-entry.js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('../public/index.html')
        })
    ]
})
