module.exports = {
  devServer: {
    port: 8999, // 端口号的配置
    open: true  // 自动打开浏览器
  },
  lintOnSave: false
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       'assets': '@/assets',
  //       'router': '@/router',
  //       'components': '@/components',
  //       'store': '@/store',
  //       'views': '@/views'
  //     }
  //   }
  // }
}