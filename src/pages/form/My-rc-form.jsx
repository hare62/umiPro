import React, { Component} from 'react'

export default function createForm(Cmp){
  return class extends Component{
    constructor(props){
      super(props)
      this.state={

      }
      this.option={}
    }
    onChange = (e)=>{
      const { name, value } = e.target
      this.setState({[name]: value})
    }
    getFieldDecorator = (filed, option)=>IputCmp=>{
      this.option[filed] = option
      return React.cloneElement(IputCmp, {
        name: filed,
        value: this.state[filed],
        onChange: this.onChange,
      })
    }
    setFieldsValue = (newStore)=>{
      this.setState(newStore)
    }
    getFieldsValue = ()=>{
      return this.state
    }
    validateFields = (callBack)=>{
      let err = []
      // 校验数据this.state
      // 校验规则this.option

      for(let field in this.option){
        // 判断state[field]是否是undefined
        // 如果是undefined err.push({[field]: 'err'})
        if(!this.state[field]){
          err.push({[field]: 'err'})
        }
      }
      if(err.length === 0 ){
        callBack(null, this.state)
      }else{
        callBack(err, this.state)
      }
    }
    getForm = ()=>{
      return {
        form:{
          getFieldDecorator: this.getFieldDecorator,
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue,
          validateFields: this.validateFields
        }
      }
    }
    render(){
      return <Cmp {...this.props} {...this.getForm()} />
    }
  }
}
