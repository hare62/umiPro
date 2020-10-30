import { resolve as reso } from "path";
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  alias: {
    '@': reso(__dirname, './src'),
    '@a': reso(__dirname, './src/assets'),
    '@v': reso(__dirname, './public'),
    '@c': reso(__dirname, './src/components'),
    '@u': reso(__dirname, './src/utils'),
    '@services': reso(__dirname, './src/services')
  },
  // routes: [//改配置是手动配置路由
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' },
  //       {
  //          path: '/home',
  //          component:'../pages/home',
  //       },
  //     ]
  //   }
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'umiPro',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
