import React from 'react'
import createStore from '../../../pages/Component/Store'
import reducer from '../../../pages/Component/Store/reducer'
import { Tabs } from 'antd'
const { TabPane } = Tabs
class Common extends React.Component {
  constructor(props) {
    super(props)
    console.log('-child-constructor--')
    this.state = {
      store: createStore(reducer),
      activeKey: this.props.activeKey
    }
  }


  componentWillMount() {
    console.log('-child-componentWillMount---')
  }

  componentDidMount() {
    console.log('-child-componentDidMount---')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('-child-shouldComponentUpdate---')
  }

  componentWillReceiveProps(nextProps) {
    console.log('-child-componentWillReceiveProps---', nextProps)
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('-child-componentWillUpdate---', nextProps)
  }

  componentDidUpdate(nextProps) {
    console.log('-child-componentDidUpdate---', nextProps)
  }

  componentWillUnmount (){
    console.log('-child-componentWillUnmount---')
  }

  render() {
    const { activeKey } = this.state
    return (
      <div>
        子组件Content of Tab Pane {activeKey}
      </div>
    )
  }
}

export default Common
