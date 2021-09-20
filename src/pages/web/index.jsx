import React, { Component, useEffect } from 'react'
import Input from './Com/Input'
import Form, { Field } from './Com'
import { Button } from 'antd';




export default function MyRCFieldForm(props) {

  let form = Form.useForm()
  return (
    <div>
      <h3>MyRCFieldForm</h3>
      <Form  form={form}>
        <Field name="userName">
          <Input  style={{marginBottom: '20px'}}></Input>
        </Field>
        <Field  name="password">
          <Input></Input>
        </Field>
        <Button  style={{marginTop: '20px'}}>Submit</Button>
      </Form>
    </div>
  );
}
