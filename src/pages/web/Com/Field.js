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
    console.log('---有这个数据', this.context)
    this.context.registFiledEntities(this)
  }

  onStoreChange = ()=>{
    this.forceUpdate()
  }

  control= ()=>{
    const { name } = this.props
    const { getfiledValue, setfiledValue } = this.context
    console.log('----this.props',  this.props )
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
