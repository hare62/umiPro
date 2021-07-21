import React from 'react'
import { Tabs } from 'antd'
import Common from './commont.jsx'
const { TabPane } = Tabs

class Footer extends React.Component {
  constructor(props) {
    super(props)
    console.log('-parent-constructor--')
    this.state = {
      activeKey: '1',
      hare: '111'
    }

  }

  componentWillMount() {
    console.log('-parent-componentWillMount---')
  }

  componentDidMount() {
    console.log('-parent-componentDidMount---')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('-parent-shouldComponentUpdate---')
    return true
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('-parent-componentWillReceiveProps---', nextProps)
  }

  componentWillUpdate(nextProps, nextState) {
    this.setState({activeKey: 2222})
    console.log('-parent-componentWillUpdate---', nextProps)
  }

  componentDidUpdate(nextProps) {

    console.log('-parent-componentDidUpdate---', nextProps)
  }

  componentWillUnmount() {
    console.log('-parent-componentWillUnmount---')
  }

  onChange = (key) => {
    this.setState({ activeKey: '2' })
  }

  render() {
    const { activeKey } = this.state
    console.log('render', activeKey)
    return (
     <div>
       <button onClick={this.onChange}>点击....</button>
       父组件{activeKey}
       <Common activeKey={activeKey}></Common>
     </div>
    )
  }
}

export default Footer
