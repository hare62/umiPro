
import React from 'react'
import { Avatar, Card, Badge, Tag } from 'antd'
import { UserOutlined } from '@ant-design/icons';

class Root extends React.Component {
  render() {

    return (
      <Card title="头像">
         <div>
            想要在root组件一个一个加好多props，感觉就很麻烦，比如name我想加一个字段，中间的每一个地方都要加。想到解决办法就是用解构全部传下去。
            ...tail剩余项解构
          </div>
        <Badge count={56}>
          <ChildOne
            user={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
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
      <ChildTwo user={this.props.user} avatarSize={this.props.avatarSize} name={this.props.name} icon={this.props.icon}/>
    )
  }
}
class ChildTwo extends React.Component {
  render() {
    return (
      <ChildThere user={this.props.user} avatarSize={this.props.avatarSize} name={this.props.name}  icon={this.props.icon}/>
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
