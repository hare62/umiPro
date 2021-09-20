import React from "react";

const Input = props => {
  return <input {...props} />;
};

// const CustomizeInput = ({value = "", ...props}) => (
//   <div style={{padding: 10}}>
//     <Input style={{outline: "none"}} value={value} {...props} />
//   </div>
// );

// 在学习的过程中我在想为啥不绑定onChange事件呢，后来发现不是没有绑定，...otherProps不就是 绑定了value和onchange事件嘛

class CustomizeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{padding: 10}}>
        <Input style={{outline: "none"}} {...this.props} />
      </div>
    );
  }
}

export default CustomizeInput;
