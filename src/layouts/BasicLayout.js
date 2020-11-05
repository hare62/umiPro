import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import { router } from 'dva'
import 'antd/dist/antd.css';
import Menu from './Menu'
import menus from '@a/menuTree'
import Breadcrumbs from '../pages/Component/Breadcrumbs'
import './style.less'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { NavLink } = router

class MenuComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <div 
          style={{height:'80px',lineHeight:'80px',paddingLeft:'20px',fontSize:"bold",backgroundColor:"#262829",color:"#fff",fontSize: 'x-large'}}
        >后台工具</div>
        <Layout>
          <Sider width={200}>
             <Menu 
              menus={menus} 
              className="site-layout-background"
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              /> 
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: 'olivedrab',
              }}
            >
               <Breadcrumbs />
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default MenuComponent;