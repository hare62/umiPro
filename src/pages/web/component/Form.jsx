import React from 'react'
import useForm from './useForm'
import FieldContext from './FieldContext'

export default function Form(props) {
  const [formInstance] = useForm()
  let { children } = props
  return (
    <form>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  )

}
