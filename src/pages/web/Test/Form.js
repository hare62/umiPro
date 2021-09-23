
import FieldContext from './fieldContext'
import useForm from './useForm'

export default function Form(props) {
  const { children, form, onFinish, onFinishFaild } = props
  const [formInstance] = useForm(form)
  formInstance.registCallback({onFinish, onFinishFaild})
  return (
    <form  onSubmit={(e)=>{
     e.preventDefault()
     formInstance.submit()
    }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  )
}
