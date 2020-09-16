
const path = require('path')
module.exports = {
  base: '/VueWheels/',
  title: 'ys-wheel',
  description: '一个好用的PC端UI组件库',
  themeConfig: {
    nav: [
      {text: '代码仓库', link: 'https://github.com/NealXavier/VueWheels'},
      {text: '交流', link: 'https://www.zhihu.com/people/NealXavier'},
    ],
    sidebar: [
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/cascader',
          '/components/slides',
          '/components/accordion',
          '/components/tab',
        ] 
      },

    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}