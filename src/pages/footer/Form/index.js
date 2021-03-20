import React from 'react'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
