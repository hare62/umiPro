import React from 'react'
import FieldContext from './FieldContext'

class Field extends React.Component {
  static contextType = FieldContext
   constructor(props){
     super(props)
     this.state={
     }
   }
   componentDidMount(){
    this.unregisterEntity = this.context.registFieldEntities(this)
   }

   componentWillUnmount(){
    if(this.unregisterEntity){
      this.unregisterEntity()
    }
  }

   onStoreChange = ()=>{
     this.forceUpdate()
   }

   getControlled = ()=>{
     const { name } = this.props
     const { getFielValues, setFieldValues } = this.context
     return {
       value: getFielValues(name),
       onChange: (e)=>{
         setFieldValues({[name]: e.target.value})
       }
    }
   }

   render(){
     const { children } = this.props
    return React.cloneElement(children, this.getControlled())
   }
}

export default Field
