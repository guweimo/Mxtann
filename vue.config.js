module.exports = {
  // 选项...
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  // chainWebpack: config => {
  //   const svgRule = config.module.rule('svg')

  //   // 清除已有的所有 loader。
  //   // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
  //   svgRule.uses.clear()

  //   // 添加要替换的 loader
  //   svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  // },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3080',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': '/',
        },
      },
    },
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
}
