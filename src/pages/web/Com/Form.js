import React from "react";
import FieldContext from './FieldContext'
import useForm from "./useForm";

export default function Form({children, onFinish, onFinishFaild, form }) {


  let [formInstance] = useForm(form)
  formInstance.registCallback({onFinish, onFinishFaild})
  return (
    <form style={{width:'200px'}} onSubmit={(e)=>{
       e.preventDefault()
       formInstance.submit()
    }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  )
}
