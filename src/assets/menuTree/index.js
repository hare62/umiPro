/**
 * 此处文件为菜单项，路径必须与pages 一致 （除：.umi、document.ejs和错误处理页面）
 * 如果设置了 show: false 时，此菜单不在显示，但会出现在面包屑中
 */
// import ACCSS  from '@a/js/access'
// const { assetFuwu, assetComponent } = ACCSS

export default [
  {
    key: 'asset',
    name: 'Home',
    path: '/home',  
    tag: 'home',
    // icon: icon[3],  
    show: true,
    children: [
      {
        key: 'business',
        name: 'business',
        tag: '',
        path: '/sitiation/business',
      }
    ]
  },
  {
    key: 'footer',
    name: 'Footer',
    path: '/footer',
    tag: 'footer',
    show: true,
  },
]
