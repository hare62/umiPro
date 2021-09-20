import React from "react";
import FieldContext from './FieldContext'
import useForm from "./useForm";

export default function Form({children}) {
  let [formInstance] = useForm()
  return (
    <form onSubmit={(e)=>{
       e.preventDefault()
      //  formInstance.submit()
    }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  )
}
