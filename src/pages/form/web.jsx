import React from 'react'
import { Provider } from './provider'
import Child from './Child'
import UserPage from './useContext'

const foo = (Com) =>(props)=>{
  return (
    <div>
      <Com {...props}>
      </Com>
    </div>
  )
}

function Child1(props){
  return <div className='border'>
    Child-{props.name}
  </div>

}

const Foo = foo(Child1)
class Business extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
        web
        <Provider value='hare'>
           <Child></Child>
           <UserPage></UserPage>
        </Provider>
        <Foo name='参数'></Foo>
      </>
    )
  }
}

export default Business
