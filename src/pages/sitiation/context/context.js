import React from 'react'
import { Button, Card } from 'antd'

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light');
class Root extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <Card title={"用了context"}>
        <ThemeContext.Provider value="primary">
          <div>使用 context, 我们可以避免通过中间元素传递 props</div>
          <ChildOne />
        </ThemeContext.Provider>
      </Card>

    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function ChildOne() {
  return (
    <div>
      <ChildTwo />
    </div>
  );
}

class ChildTwo extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    // 这个context就是ThemeContext.Provider组件上的value值，一个context只能注册一个value对象。所以this.context就直接指代context
    return <Button theme={this.context} type={this.context}>按钮</Button>;
  }
}

export default Root
