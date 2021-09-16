
import React from 'react'
import { Avatar, Card, Badge, Tag } from 'antd'
import { UserOutlined } from '@ant-design/icons';

class Root extends React.Component {
  render() {

     let AvatarView = <Avatar
     size={64}
     style={{ backgroundColor: '#87d068' }}
     icon={<UserOutlined />}
   />
    return (
      <Card title="组件提升写法">
         <div>
            ...tail剩余项解构
            一样的效果,中间组件把剩余的props以...props都传进去即可
          </div>
        <Badge count={56}>
          <ChildOne
            avatar={AvatarView}
            />
        </Badge>
      </Card>
    )
  }
}

class ChildOne extends React.Component {
  render() {
    return (
      <ChildTwo {...this.props}/>
    )
  }
}
class ChildTwo extends React.Component {
  render() {
    return (
      <ChildThere {...this.props}/>
    )
  }
}
class ChildThere extends React.Component {
  render() {
    const { avatar } = this.props
    return (
      <>
        {avatar}
        <Tag>{this.props.name}</Tag>
      </>
    )
  }
}

export default Root
