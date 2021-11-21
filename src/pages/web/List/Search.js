import React from "react";
import { Form, Input, Button, Checkbox, Col, Row } from 'antd';

export default (props) => {
  const [form] = Form.useForm();
  console.log('------Form-', Form.useForm())
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = ()=>{
    const { reset } = props
    reset && reset()
    form.resetFields({})
  }
  const { children, initialValues } = props;
  console.log('-----', children)
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="inline"
      initialValues={initialValues}
    >
      <Row gutter={16}>
        {React.Children.map(props.children, (item) => {
          return <Col span={6}>
            {item}
          </Col>
        })}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

