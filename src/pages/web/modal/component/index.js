import React from "react";
import { createPortal } from 'react-dom'
import { Modal } from 'antd'

class modalPage extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      visible: false
    }
    const dom = window.document
    this.node = dom.createElement('div')
    dom.body.appendChild(this.node)
  }

  componentWillUnmount() {

  }

  show = ()=>{
    this.setState({visible: true})
  }

  hide =()=>{
    this.setState({visible:false})
  }
  render() {
    return createPortal(
      <div>
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={this.show}
          onCancel={this.hide}
          >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>,
      this.node
    )
  }
}

export default modalPage
