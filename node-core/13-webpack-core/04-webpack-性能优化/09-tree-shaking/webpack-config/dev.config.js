/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    proxy: {
      '^/api': {
        target: '',
        pathRewrite: {
          '^/api': '',
        },
      },
      changeOrigin: true,
    },
    historyApiFallback: true,
  },
}
