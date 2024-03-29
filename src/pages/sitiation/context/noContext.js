import React from 'react'
import { Button, Card } from 'antd';

class App extends React.Component {
  render() {
    return (
      <Card title="没有用context">
       <Toolbar theme="primary" />
      </Card>
    )
  }
}

function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} type={this.props.theme}>按钮</Button>
  }
}

export default App
