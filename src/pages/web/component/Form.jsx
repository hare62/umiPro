import React from 'react'
import useForm from './useForm'
import FieldContext from './FieldContext'

/**
 * 将useForm数据引入到form
 * @param {*} props
 * @returns
 */
export default function Form(props, ref) {

  let { children, onFinish, onFinishFailed, form} = props

  const [formInstance] = useForm(form)
  React.useImperativeHandle(ref, ()=> formInstance)

  formInstance.setCallbacks({
    onFinish,
    onFinishFailed
  })
  return (
    <form onSubmit={e=>{
      e.preventDefault()
      formInstance.submit()
    }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  )

}
