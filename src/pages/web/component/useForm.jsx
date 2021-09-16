import React from "react";
// 存储form数据
class FormStore{
  constructor(){
    // 这里存储form要处理的数据
    this.store={

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
    console.log('--this.store--', this.store)
  }
  getForm = ()=>{
    return {
      getFielValues: this.getFielValues,
      setFieldValues: this.setFieldValues,
    }
  }
}

export default function useForm(){
  const formRef = React.useRef()
  if(!formRef.current){
    const formStore = new FormStore();
    formRef.current = formStore.getForm()
  }

  return [formRef.current]
}
