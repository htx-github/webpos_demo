const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
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

  // configureWebpack: {
  //   resolve: {
  //     symlinks: false,
  //     alias: {
  //       '@': path.resolve(__dirname, 'src')
  //     }
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
    // config.module
    //   .rule('svg')
    //   .uses.clear()
    config.module
      .rule('svg1')
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
      .include
      .add(resolve('src/icons'))
      .end()
    config.module.rule('svg').exclude.add(resolve('src/icons')).end() //使得svg能在img的src下属性可用
  },
  lintOnSave: false
}
