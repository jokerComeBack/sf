module.exports = {
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
        // items: [
        //   { text: '总览', link: '/framework/' },
        //   { text: '脑图', link: '/mind/' },
        // ]
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
      // '/',
      // '/page-a',
      // ['/page-b', 'Explicit link text']
    ]
    }
  // }
}