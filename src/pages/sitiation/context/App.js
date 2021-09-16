import React from 'react'
import {ThemeContext, themes} from './theme-context';
import ChildThere from './themed-button';

// 一个使用 ChildThere 的中间组件
function ChildOne(props) {
  return (
    <ChildThere onClick={props.changeTheme}>
      Change Theme
    </ChildThere>
  );
}

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // 在 ThemeProvider 内部的 ChildThere 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <div>
        <div>
        通过注册
        ThemedButton.contextType = ThemeContext;
        可以在当前组件上获取this.context到ThemeContext.Provider注册的值
        </div>
        {/* <br/> */}
        <ThemeContext.Provider value={this.state.theme}>
          <ChildOne changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ChildThere>ChildThere</ChildThere>
        </div>
      </div>
    );
  }
}

export default Root
