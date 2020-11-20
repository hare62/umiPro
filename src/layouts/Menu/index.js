import { Component } from 'react'
import { Menu } from 'antd'
import { withRouter } from 'umi'
import { router } from 'dva'
import './index.less'
import menus from '@a/menuTree'
// import { getLinkSaveUrl, getFlatList } from '@/utils/common'

const { NavLink } = router
const { SubMenu, Item } = Menu
// 需要往系统菜单添加内容项的 key
@withRouter
class Menus extends Component {
  constructor(props) {
    super(props)
    // const { active } = getLinkSaveUrl()
    this.state = {
      selectedKeys: [0],
      openKeys: []
    }
  }
  /**
   * 由于umi版本原因,无法在models的subscriptions中使用dispatch和history.push方法，因此获取菜单打开项和路由拦截功能放在此页面
   * dispatch方法会触发三次路由
   * history.push方法会递归跳转导致栈溢出
   **/
  componentDidMount() {
    // this.subscriptions()
    // this.generateMenuOpenKeys()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const pathname = nextProps.location.pathname
    // this.subscriptions(pathname)
    // this.generateMenuOpenKeys(pathname)
  }

  //路由拦截
  // subscriptions = (pathname = this.props.location.pathname) => {
  //   // 无须任何权限，可以直接进入该页面路由的集合
  //   const excludePaths = ['/login', '/401', '/404']
  //   const tags = JSON.parse(sessionStorage.getItem('menus') || '["资产管理"]')
  //   const routers = getFlatList(menus)
  //   const current = routers.filter(item => item.path.toLowerCase() === pathname.toLowerCase())[0]
  //   if (current) {
  //     const { tag, path } = current
  //     if (!excludePaths.includes(path) && !tags.includes(tag)) {
  //       // this.props.history.push('/401')
  //     }
  //   }
  // }

  /**
   * 菜单点击事件
   * 把打开的折叠菜单记录下来，以便刷新界面时，快速展开之前的菜单
   * */
  onOpenChange = (keyPath) => {
    const newKeyPath = keyPath
    console.log("-----吗，没有找到这个 api",keyPath)
    this.setState({ openKeys: newKeyPath })
    sessionStorage.setItem('openKeys', newKeyPath.join(','))
  }
  /**
   * 生成菜单的选中项，在刷新页面时，提供刷新之前选中的菜单项
   **/
  generateMenuSelectKeys() {
    console.log("--这个函数是否是刷新页面时候触发呢")
    const { pathname = '' } = this.props.history.location
    const urlArr = pathname.split('/').splice(1)
    return [urlArr.map((path) => `/${path}`).join('')]
  }
  /**
   * 生成菜单的展开项，在刷新页面时，提供刷新之前展开的菜单项
   **/
  generateMenuOpenKeys(pathname = this.props.location.pathname) {
    const { openKeys: _openKeys } = this.state
    const openKeys = this.findMenuOpenKey(_openKeys)
    const curOpenKey = `/${pathname.split('/')[1]}`
    if (!openKeys.includes(curOpenKey)) {
      openKeys.push(curOpenKey)
    }
    this.setState({ openKeys })
  }

  findMenuOpenKey = (list = []) => {
    const openKeys = (sessionStorage.getItem('openKeys') || '').split(',').filter(e => e)
    if (list.length) {
      const _openKey = []
      let curOpenKey = ''
      for (let i = 0, len = list.length; i < len - 1; ++i) {
        if (!openKeys.includes(list[i])) {
          curOpenKey += ('/' + list[i])
          _openKey.push(curOpenKey)
        }
      }
      return [...new Set([...openKeys, ..._openKey])]
    } else {
      return openKeys
    }
  }

  //获取菜单权限
  getMenu = menuTree => menuTree.map(item => {
    // console.log(item)
    // 判断是否显示该菜单项
    // const isDetail = typeof item.show === 'boolean' ? !item.show : false
    // if(isDetail || !hasAuth(item.tag)) {
    //   return null
    // }
    // <img src={item.icon} className="menu-icon" alt=""/>
    // console.log(item)
    // 显示的子菜单的数量
    const showMenuItemLength = (item.children || []).filter((e) => typeof e.show === 'undefined' ? true : e.show).length
    // 有子菜单项，并且子菜单必须有一个时显示
    if (item.children && showMenuItemLength) {
      return (
        <SubMenu
          key={item.path}
          title={
            <span>{item.name}</span>
          }>
          { this.getMenu(item.children)}
        </SubMenu>
      )
    }

    return <Item key={item.path}>
      <NavLink   to={item.path}>{item.name}
      </NavLink>
    </Item>
  })

  render() {
    const { openKeys } = this.state
    return (
      <Menu
        // onOpenChange={this.onOpenChange}
        // selectedKeys={this.generateMenuSelectKeys()}
        // openKeys={this.generateMenuOpenKeys()}
        // openKeys={openKeys}
        mode="inline"
        className='custom-menus'
        theme="dark"
        style={{ overflowY: 'auto', height: '100%', background: '#171E35' }}
      >
        {
          this.getMenu(menus)
        }
      </Menu>
    )
  }
}

export default withRouter(Menus)

