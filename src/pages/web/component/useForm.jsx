import React from "react";
// 存储form数据
let instance = null
class FormStore{
  constructor(){

    // 这里存储form要处理的数据
    this.store={

    }
    // 把每个form.Item都存起来
    this.fieldEntities ={}
    this.callbacks={}
  }

  setCallbacks = (callback)=>{
    this.callbacks={
      ...this.callbacks,
      ...callback
    }

  }

  registFieldEntities = (context)=>{
    // this.fieldEntities = {
    //   ...this.fieldEntities,
    //   [entity.props.name]: entity
    // };
     this.fieldEntities[context.props.name] = context

     return ()=>{

       delete this.fieldEntities[context.props.name]
       console.log('--卸载', this.fieldEntities)
     }
  }

  getFielValues = (name)=>{
    return this.store[name]
  }

  setFieldValues = (newStore)=>{
    this.store={
      ...this.store,
      ...newStore
    }

    // 需要更新这个当前的formItem
    Object.keys(newStore).forEach((name)=>{
      this.fieldEntities[name].onStoreChange()
    })

  }

  validate =()=>{
    let err = []
    Object.keys(this.fieldEntities).forEach((name)=>{

      let entity= this.fieldEntities[name]
      let {rules} = entity.props
      let rule = rules && rules[0]
      let value = this.getFielValues(name)
      console.log('--rule-', rule)
      if(!value && rule){

        err.push({
          [name]: rule.message,
          value: value
        })
      }
    })
    console.log('---err', err)
    return err
  }
  submit=()=>{
    let { onFinish,
      onFinishFailed} = this.callbacks
    let err = this.validate()
    if(err.length === 0){
      console.log('---验证成功')
      onFinish && onFinish(this.store)
    }else{
      console.log('---验证失败')
      onFinishFailed && onFinishFailed(err, this.store)
    }
  }
  getForm = ()=>{
    return {
      getFielValues: this.getFielValues,
      setFieldValues: this.setFieldValues,
      registFieldEntities: this.registFieldEntities,
      submit: this.submit,
      setCallbacks: this.setCallbacks
    }
  }
}

export default function useForm(form){
  // React.useRef()到底返回了什么这个api有什么作用
  const formRef = React.useRef()
  console.log('-formRef----', formRef)
  // 单例
  if(!formRef.current){

    if(form){
      formRef.current = form
    }else{
      const formStore = new FormStore();
      formRef.current = formStore.getForm()
      console.log('会执行多少吃', formRef.current)
    }

  }

  return [formRef.current]
}
