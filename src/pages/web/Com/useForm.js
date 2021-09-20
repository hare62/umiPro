import React from "react"

class FormStore {
  constructor() {

    this.store = {}
    this.FiledEntities = {}
    this.callbacks={}
  }

  registCallback=(callback)=>{
    this.callbacks={
      ...this.callbacks,
      ...callback
    }
  }

  registFiledEntities = (entities) => {
    this.FiledEntities = {
      ...this.FiledEntities,
      [entities.props.name]: entities
    }


  }

  getfiledValue = (name) => {
    return this.store[name]

  }

  validate = () => {
    let err = []

    Object.keys(this.FiledEntities).forEach((name) => {
      let value = this.getfiledValue(name)
      let entities = this.FiledEntities[name]
      let { rules } = entities.props
      let rule = rules && rules[0]
      if (!value) {
        err.push({
          message: rule.message,
          [name]: value
        })
      }
    })

    return err
  }

  submit = () => {
    const { onFinish, onFinishFaild } = this.callbacks


    let err = this.validate()
    if(err.length){
      onFinishFaild(err, this.store)
    }else{
      onFinish(this.store)
    }
  }

  setfiledValue = (entity) => {

    this.store = {
      ...this.store,
      ...entity
    }
    Object.keys(this.FiledEntities).forEach((name)=>{
      this.FiledEntities[name].onStoreChange()
    })
  }

  getForm = () => {
    return {
      getfiledValue: this.getfiledValue,
      setfiledValue: this.setfiledValue,
      registFiledEntities: this.registFiledEntities,
      submit: this.submit,
      registCallback: this.registCallback
    }
  }
}

export default function useForm(form) {
  let useFormRef = React.useRef()
  if(!form){
    let formStore = new FormStore()
    useFormRef.current = formStore.getForm()
  }else{
    useFormRef.current = form
  }

  return [useFormRef.current]
}
