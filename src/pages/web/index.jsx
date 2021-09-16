import React, { Component, useEffect } from 'react'
import { Input } from 'antd'
import Form, { Field } from './component'

class Business extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div style={{ width: '250px' }}>
        <Form>
          <Field name="user">
            <Input ></Input>
          </Field>
          <Field name="password">
            <Input></Input>
          </Field>
        </Form>
      </div>
    )
  }
}

export default Business
