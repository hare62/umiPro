import React from 'react'
import './index.less'

/* 

*/
class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount (){
  }

  render() {
    return (
      <div >
        footer页面
        <div style={{width: '100px', height: '30px', backgroundColor: 'honeydew', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius:'5px'}}>
          节点1
          <spn style={{marginLeft:'10px',width:'20px', height:'20px',borderRadius:'50px',backgroundColor:'#ef5d5a',display:'flex',justifyContent:'center', color:'white'}}>X</spn>
        </div>
      </div>
    )
  }
}

export default Footer