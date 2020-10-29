import React from 'react';
import MenuComponent from '../pages/Component/Menu/Menu'
import "antd/dist/antd.css";

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <div >
        <MenuComponent></MenuComponent>
      </div>
    );
  }
}


export default BasicLayout;
