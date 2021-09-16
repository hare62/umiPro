import React from 'react'
// import { createForm } from 'rc-form'
import createForm from './My-rc-form'
import { Button, Input } from 'antd'

const nameRules = {required: true, message: '请输入姓名'}
const passwordRules = {required: true, message: '请输入密码'}

@createForm
class MyRcComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    // this.props.form.setFieldsValue({userName:'hhhhhh'})
  }
  onClick = ()=>{
    const { getFieldsValue, validateFields } = this.props.form
    getFieldsValue()
    // console.log('-获取值--', getFieldsValue())
    validateFields((err, val)=>{
      if(err){
        console.log('err', err)
      }else{
        console.log('提交成功', val)
      }
    })
  }
  render(){
    console.log('----',this.props)
    let { userName, password } = this.state
    let { getFieldDecorator } = this.props.form
    return (
      <div>
        MyRcComponent
        {getFieldDecorator('userName', {rules: [nameRules]})(<Input
          placeholder="UserName"
        />)}
        {getFieldDecorator('password', {rules: [passwordRules]})(<Input
          placeholder="UserName"
        />)}
        <Button onClick={this.onClick}>
          提交
        </Button>
      </div>
    )
  }
}

export default MyRcComponent
