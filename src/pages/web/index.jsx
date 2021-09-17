import React, { Component, useEffect } from 'react'
import { Input } from 'antd'
// import Input from './component/Input'
import Form, { Field } from './component'



const nameRules = {required: true, message: "请输入姓名！"};
const passworRules = {required: true, message: "请输入密码！"};

export default function MyRCFieldForm(props) {
  const [form] = Form.useForm();

  const onFinish = val => {
    console.log("onFinish", val); //sy-log
  };

  // 表单校验失败执行
  const onFinishFailed = val => {
    console.log("onFinishFailed", val); //sy-log
  };

  // 函数组件初次渲染之后执行，类似componentDidMount
  useEffect(() => {
    console.log("form", form); //sy-log
    // form.setFieldsValue({username: "default"});
  }, [form]);

  return (
    <div>
      <h3>MyRCFieldForm</h3>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Field name="username" rules={[nameRules]}>
          <Input placeholder="input UR Username" />
        </Field>
        <Field name="password" rules={[passworRules]}>
          <Input placeholder="input UR Password" />
        </Field>
        <button>Submit</button>
      </Form>
    </div>
  );
}





// class Business extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }

//   componentDidMount() {
//   }

//   render() {
//     return (
//       <div style={{ width: '250px' }}>
//         <Form>
//           <Field name="user">
//             <Input ></Input>
//           </Field>
//           <Field name="password">
//             <Input></Input>
//           </Field>
//         </Form>
//       </div>
//     )
//   }
// }

// export default Business
