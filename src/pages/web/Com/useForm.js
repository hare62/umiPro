import React from "react"

class FormStore {
  constructor() {
    this.store = {

    }
    this.Store = {}
    this.FiledEntities = {}
  }

  registFiledEntities = (entities)=>{
    this.FiledEntities = {
      ...this.FiledEntities,
      [entities.props.name]: entities
    }

    console.log('-=', this.FiledEntities)

  }

  getfiledValue = (name) => {
    return this.Store[name]

  }

  submit = ()=>{
    console.log('----submit')
  }

  setfiledValue = (entity) => {

    this.Store = {
      ...this.Store,
      ...entity
    }
    console.log('实例数据', this.Store)
    // Object.keys(this.FiledEntities).forEach((name)=>{
    //   this.FiledEntities[name].onStoreChange()
    // })

  }

  getForm = () => {
    return {
      getfiledValue: this.getfiledValue,
      setfiledValue: this.setfiledValue,
      registFiledEntities: this.registFiledEntities,
      submit: this.submit
    }
  }
}

export default function useForm() {
  let useFormRef = React.useRef()
  let formStore = new FormStore()
  useFormRef.current = formStore.getForm()
  return [useFormRef.current]
}
