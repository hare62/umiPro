import React, { Component, useEffect } from 'react'
import Input from './Test/Input'
import Form, { Field } from './Test'


let userNameRule = [{ message: '请输入userNameRule', required: true }]
let passwordRule = [{ message: '请输入passwordRule', required: true }]

export default function MyRCFieldForm(props) {

  let [form] = Form.useForm()
  const onFinish = (valus) => {
    console.log('onFinish', valus)
  }
  const onFinishFaild = (valus) => {
    console.log('onFinishFaild', valus)
  }
  useEffect(() => {
    console.log("form", form);
    form.setfieldValue({ userName: 'nnnnn' })
  }, [form])
  return (
    <div>
      <h3>MyRCFieldForm</h3>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFaild={onFinishFaild}>
        <Field name="userName" rules={userNameRule}>
          <Input style={{ marginBottom: '20px', }}></Input>
        </Field>
        <Field name="password" rules={passwordRule}>
          <Input style={{ marginBottom: '20px', }} ></Input>
        </Field>
        <button style={{ marginTop: '20px' }}>Submit</button>
      </Form>
    </div>
  );
}
