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
      },
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
      }
    ]
  }
]
