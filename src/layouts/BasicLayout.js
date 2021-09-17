import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import Menu from './Menu'
import menus from '@a/menuTree'
import Breadcrumbs from './Breadcrumb/index'
import './style.less'

const { Content, Sider } = Layout;
class MenuComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }

  /**
   * 通过当前路径找到对应的节点信息
   * @param data
   * @param path
   * @return {*}
   */
  findNodeByPath = (data = [], path) => {
    //此处 findNodeList 充当队列的作用
    let findNodeList = [...data]
    while(findNodeList.length) {
      let rootNode = findNodeList[ 0 ]
      if(rootNode.path === path) {
        return rootNode
      }
      //清除队列中的第一个元素
      findNodeList.shift()
      let childrenNode = rootNode.children
      if(childrenNode) {
        childrenNode.forEach(item => {
          findNodeList.push(item)
        })
      }
    }
  }

  render() {
    const { children } = this.props
    // console.log('menus', menus)
    // console.log('this.props', this.props)

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <div
          style={{ height:'80px',lineHeight:'80px',paddingLeft:'20px',fontSize:"bold",backgroundColor:"#262829",color:"#fff",fontSize:'x-large' }}
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
              style={{ height: '100%', borderRight: 0 ,background: '#cce198'}}
              />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumbs />
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: '#cce198',
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default MenuComponent;
