
import React from 'react'


class FormStore {
  constructor() {
    // 存放input的值
    this.store = {
    }
    this.FieldEntities = {}
    this.callbacks={}
  }

  registCallback = (callback)=>{
    this.callbacks={
      ...this.callbacks,
      ...callback
    }
  }

  registFielEntities = (entities) => {
    this.FieldEntities = {
      ...this.FieldEntities,
      [entities.props.name]: entities
    }
    console.log('--registFielEntities-', this.FieldEntities)
  }

  getFieldValue = (name) => {
    return this.store[name]
  }

  setfieldValue = (entities) => {
    this.store = {
      ...this.store,
      ...entities
    }

    Object.keys(entities).forEach((name)=>{
      this.FieldEntities[name].onStorecallback()
    })

  }

  validate = () => {
    let err = []
    console.log('this.store', this.store)
    console.log('this.FieldEntities', this.FieldEntities)
    // 从实例入手
    Object.keys(this.FieldEntities).forEach((name)=>{
      let value = this.getFieldValue(name)
      let { rules } = this.FieldEntities[name].props
      let rule = rules && rules.length && rules[0]
      if(!value){
        err.push({
          [name]: value,
          message: rule && rule.message
        })
      }
    })
    return err
  }
  submit = () => {
    const { onFinish, onFinishFaild } = this.callbacks
    let err = this.validate()
    if (err.length) {
      console.log('判空失败', err)
      onFinishFaild(err, this.store)
    } else {
      console.log('判空成功', err)
      onFinish(this.store)
    }
    console.log('---看看', this.store)
  }

  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      setfieldValue: this.setfieldValue,
      submit: this.submit,
      registFielEntities: this.registFielEntities,
      registCallback: this.registCallback
    }
  }
}

export default function useForm(form) {
  let useRef = React.useRef()
  if(!form){
    let formStore = new FormStore()
    useRef.current = formStore.getForm()
  }else{
    useRef.current = form
  }



  return [useRef.current]
}
