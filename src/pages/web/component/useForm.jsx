import React from "react";
// 存储form数据
class FormStore{
  constructor(){
    // 这里存储form要处理的数据
    this.store={

    }
    // 把每个form.Item都存起来
    this.fieldEntities ={}
  }

  registFieldEntities = (context)=>{
    // this.fieldEntities = {
    //   ...this.fieldEntities,
    //   [entity.props.name]: entity
    // };
     this.fieldEntities[context.props.name] = context
     console.log('--yin2ci', this.fieldEntities)
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
  getForm = ()=>{
    return {
      getFielValues: this.getFielValues,
      setFieldValues: this.setFieldValues,
      registFieldEntities: this.registFieldEntities
    }
  }
}

export default function useForm(){
  const formRef = React.useRef()
  console.log('-formRef----', formRef)
  // 单例
  if(!formRef.current){
    const formStore = new FormStore();
    formRef.current = formStore.getForm()
  }

  return [formRef.current]
}
