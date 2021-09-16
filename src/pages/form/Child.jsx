import React from 'react'
import { MyContent } from './provider'

class Child extends React.Component {
  // static contextType = MyContent;
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    console.log('this.context', this.context)
    return (
      <>
        <div>
            {this.context}
        </div>
      </>
    )
  }
}
Child.contextType = MyContent
export default Child
