import React, {useContext} from 'react'
import { MyContent } from './provider'

export default function UserPage(){
  let ctx = useContext(MyContent)
  console.log('ctx', ctx)
  return (
    <div>
      {ctx}
    </div>
  )
}
