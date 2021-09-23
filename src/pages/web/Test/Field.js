import React from "react";
import FieldContext from "./fieldContext";

export default class Field extends React.Component {
  static contextType = FieldContext
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount(){
    const { registFielEntities } = this.context
    registFielEntities(this)
  }

  onStorecallback = ()=>{
    this.forceUpdate()
  }

  control = () => {
    const { getFieldValue, setfieldValue } = this.context
    const { name } = this.props
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        console.log('---有嘛', e.target.value)
        return setfieldValue({[name]: e.target.value})
      }
    }
  }

  render() {
    return React.cloneElement(this.props.children, this.control())
  }
}
