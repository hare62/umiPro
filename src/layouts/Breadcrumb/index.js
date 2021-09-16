import React from 'react'
import { Breadcrumb } from 'antd';
import menuTree from '@a/menuTree'
import { router } from 'dva'
const { withRouter } = router

class RenderBreadcrumb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.changeList()
  }

  changeList = ()=>{
    let arrPath = this.props.history.location.pathname.slice(1).split('/')
    let data = this.getBreadcrumbList(arrPath)
    this.setState({list: data})
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.changeList()
  }

  /**
   * 需求：面包屑
   * 要展示的是name名字，不是path  
   * 而且一定要是父子孙这样独立出来，不能听过子去推出父，同理也不能通过孙去推出子
   * 那就要走过的时候就直接把数据找出来 
   * 举个例子:menuTree是个多叉树的形式存在，其实本质是个数组
   * 在遍历的时候，有个技巧很好的是，我们把目标对象拆出来了['sitiation', 'toJson']
   * 首先这样就需要循环两边去找，第一次的时候是查找sitiation，第二遍就是查找sitiation/toJson
   * 把一次找到的结构放在一个数组中就ok了
   */
  getBreadcrumbList = (urlArr) => {
    const { excludePathname = [] } = this.props
    if(urlArr.length) {
      const breadcrumbs = []
      let curLink = ''
      for(let i = 0, len = urlArr.length; i < len; ++i) {
        curLink += ('/' + urlArr[ i ])
        const currentMenuItem  = this.findNodeByPath(menuTree, curLink)
        if(currentMenuItem){
          const showMenuItemLength = (currentMenuItem.children || []).filter((e)=>typeof e.show === 'undefined' ? true : e.show).length
          breadcrumbs.push({
            name: currentMenuItem.name, // 名称
            breadcrumbName: currentMenuItem.name, // 名称
            link: curLink, //跳转地址
            path: urlArr[ i ], //跳转地址
            notTo: i === urlArr.length - 1 || !!showMenuItemLength // 最后以及不能进行跳转
          })
        }
      }
      return breadcrumbs.filter((e)=>!excludePathname.includes(e.link))
    } else {
      return []
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
    while(findNodeList.length > 0) {
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
    let { list } = this.state
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        {list.length && list.map((item) =>{
           return (
            <Breadcrumb.Item>{item.name}</Breadcrumb.Item>
           )
        })}
      </Breadcrumb>
    )
  }
}

export default withRouter(RenderBreadcrumb)