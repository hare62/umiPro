import React from 'react'
import createStore from '../../../pages/Component/Store'
import reducer from '../../../pages/Component/Store/reducer'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      store: createStore(reducer)
    }
  }


  componentDidMount() {

  }

  change = (file) => {
    console.log('---file', file)
    const { files } = file.target;
    console.log('---file', files)
  }

  render() {

    return (
      <div >
        Form
      </div>
    )
  }
}

export default Footer
