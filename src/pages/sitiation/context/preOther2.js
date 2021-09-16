
import React from 'react'
import { Avatar, Card, Badge, Tag } from 'antd'
import { UserOutlined } from '@ant-design/icons';

class Root extends React.Component {
  render() {

    return (
      <Card title="...tail">
         <div>
            ...tail剩余项解构
            一样的效果,中间组件把剩余的props以...props都传进去即可
          </div>
        <Badge count={56}>
          <ChildOne
            // user={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
            avatarSize={64}
            name="hare"
            icon={<UserOutlined />}
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
    return (
      <>
        <Avatar
          size={this.props.avatarSize}
          style={{ backgroundColor: '#87d068' }}
          icon={this.props.icon}
        />
        <Tag>{this.props.name}</Tag>
      </>
    )
  }
}

export default Root
