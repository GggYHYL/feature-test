// 端口
const port = 8080
// 环境url配置
const _serveUrl = {
    // 开发
    development: `https://emeah.ctwenhuayun.cn/`,
    // 测试
    test: `https://emeah.ctwenhuayun.cn/`,
    // 生产
    production: `https://emeah.ctwenhuayun.cn/`,
}

module.exports = {
    publicPath: '/',
    lintOnSave: false,
    outputDir: `dist-${process.env.NODE_ENV}`,
    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        port,
        // public: `http://localhost:${port}/#/`, //Network
        hot: true,
        disableHostCheck: true,
        // open: true, //配置自动启动浏览器
        proxy: {
            [process.env.VUE_APP_BASIC_API]: {
                logLevel:"debug",
                // 服务器地址
                target: _serveUrl[process.env.NODE_ENV],
                // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                changeOrigin: true, 
                ws: true,
                pathRewrite: {
                    ['^'+process.env.VUE_APP_BASIC_API]: '' 
                }
            }
        }
    },
    chainWebpack: config => {
        config
          .plugin('html')
          .tap(args => {
            args[0].title= '设置项目名称'
            return args
          })
    }
}