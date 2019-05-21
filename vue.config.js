const path = require('path')

module.exports = {
  // 等值于 output.publicPath
  publicPath: './',

  assetsDir: 'static',

  // 等值于 output.path
  outputDir: path.resolve(__dirname, 'dist/'),

  filenameHashing: true,

  pages: {
    index: {
      entry: path.resolve(__dirname, 'src/main.js'),
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },

  devServer: {
    port: 9090
  },

  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },

  lintOnSave: false
}
