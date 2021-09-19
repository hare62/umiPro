/**
 * 此处文件为菜单项，路径必须与pages 一致 （除：.umi、document.ejs和错误处理页面）
 * 如果设置了 show: false 时，此菜单不在显示，但会出现在面包屑中
 */
// import ACCSS  from '@a/js/access'
// const { assetFuwu, assetComponent } = ACCSS

export default [
  {
    key: 'asset',
    name: '主页面',
    path: '/sitiation',
    tag: 'home',
    children: [
      {
        key: 'context',
        name: 'context',
        tag: '',
        path: '/sitiation/context',
      },
      {
        key: 'antv',
        name: 'antv',
        tag: '',
        path: '/sitiation/antv',
      },
      {
        key: 'excel',
        name: 'excel',
        tag: '',
        path: '/sitiation/excel',
      },
      {
        key: 'toJson',
        name: '转数据页面',
        tag: '',
        path: '/sitiation/toJson',
      },
      {
        key: 'toJSX',
        name: 'toJSX',
        tag: '',
        path: '/sitiation/toJXS',
      },
    ]
  },
  {
    key: 'footer',
    name: '副业面',
    path: '/footer',
    tag: 'footer',
    children: [
      {
        key: 'business',
        name: '导入表格转json',
        target: '_blank',
        path: '/footer/file',
      },
      {
        key: 'business',
        name: '导入表格转json',
        target: '_blank',
        path: '/footer/form',
      },{
        key: 'search',
        name: 'search组件',
        target: '_blank',
        path: '/footer/search',
      }
    ]
  },
  {
    key: 'form',
    name: '表单',
    path: '/form',
    tag: 'form',
    children: [
      {
        key: 'test',
        name: '表单',
        target: '_blank',
        path: '/form'
      },{
        key: 'web',
        name: 'web学习',
        target: '_blank',
        path: '/form/web'
      },{
        key: 'MyRcComponent',
        name: 'MyRcComponent',
        target: '_blank',
        path:'/form/MyRcComponent'
      }
    ]
  },{
    key: 'web',
    name: '自定义表单',
    path: '/web',
    tag: 'tag',
    children:[
      {
        key: 'webs',
        name: '手写form',
        target: '_blank',
        path: '/web'
      },
      {
        key: 'modal',
        name: 'modal',
        target: '_blank',
        path: '/web/modal'
      },
      {
        key: 'Ref',
        name: 'ref',
        target: '_blank',
        path: '/web/Ref'
      }
    ]
  }
]
