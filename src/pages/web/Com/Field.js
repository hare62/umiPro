import React from "react";
import FieldContext from './FieldContext'

class Field extends React.Component{
  static contextType = FieldContext
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentDidMount(){
    this.context.registFiledEntities(this)
  }

  onStoreChange = ()=>{
    this.forceUpdate()
  }

  control= ()=>{
    const { name } = this.props
    const { getfiledValue, setfiledValue } = this.context
    return {
      value: getfiledValue(name),
      onChange: (e)=>{
        return  setfiledValue({[name]: e.target.value})
      }
    }
  }

  render(){
    return(
     React.cloneElement(this.props.children, this.control())
    )
  }
}


export default Field
