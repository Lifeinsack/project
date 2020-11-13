module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://sdjapi.qzquanxian.com/',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }