import { Button } from 'antd';
import React from 'react';

class App extends React.Component {
  componentDidMount() {
    this.refIns = React.createRef();
  }

  onclick = ()=>{
    console.log(this.refIns)
  }
  render() {
    return (
      <div >
        <div id="refIns" ref={this.refIns}>
          hello
        </div>
        <Button onClick={this.onclick}>点击获取</Button>
      </div>
    );
  }

}

export default App
