const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
const CracoLessPlugin = require('craco-less');
// const sassResourcesLoader = require('craco-sass-resources-loader');
module.exports = {
  reactScriptsVersion: "react-scripts",
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@store': pathResolve('src/store')
    }
  },
  plugins: [
    // 全局导入scss变量
    // {
    //   plugin: sassResourcesLoader,
    //   options: {
    //     resources: [
    //       './src/assets/scss/public.scss',
    //     ],
    //   },
    // },
    // 按需加载antd样式
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    }
  ],
}
