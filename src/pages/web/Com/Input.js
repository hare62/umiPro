import React from 'react'

class Input extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    const { value = '', ...otherProps} = this.props

    return (
      <input {...this.props}></input>
    )
  }
}

export default Input
