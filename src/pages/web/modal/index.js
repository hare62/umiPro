import React from "react";
import { createPortal } from 'react-dom'
import { Button, Modal } from 'antd'
import ModalPage from './component/index'

class modalPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showModal: false
    }
  }

  /**
    这种model思维就是说在当前组件里面有一个状态去控制Dom的显示和隐藏
   */
  componentWillUnmount(){

  }

  render(){
    const { showModal } =this.state
    return (<div>
       <Button onClick={()=>{
         this.setState({showModal: !showModal})
       }}>点击</Button>
       {showModal? <ModalPage></ModalPage>: null}
    </div>)
  }
}

export default modalPage
