const path = require('path');
module.exports = {
  base:'/sf/',
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, './imgs'),
      }
    }
  },
  title: 'Hello SF',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '产品结构', link: '/structure/' },
      {
        text: '代码框架', link: '/framework/'
      },
      { text: '实现功能', link: '/features/' },
      { text: '技术难点', link: '/technology/' },
    ],
    // 为以下路由添加侧边栏

    sidebar: [
      ['/mind/', '概览'],
      ['/list/', 'List模块'],
      ['/board/', 'Board模块'],
      ['/editor/', 'Editor模块'],
      ['/report/', 'Report模块'],
      ['/set/', 'Set模块'],
      ['/setchannel/', 'SetChannel模块'],
      ['/setmsglimit/', 'SetMsgLimit模块']
    ]
    }
  // }
}