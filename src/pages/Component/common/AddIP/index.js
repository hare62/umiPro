import React from 'react'
import { Form, Input, Select } from 'antd'
import './index.less'

const { Option } = Select

class Demo extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      return callback()
    }
    callback('Price must greater than zero!')
  }

  onClick = () => {
    
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='add-ip-item'>
        <Form layout="inline" onSubmit={this.handleSubmit} >
          <Form.Item label="ip起始位置">
            {getFieldDecorator('price', {
              // initialValue: { number: 0, currency: 'rmb' },
              rules: [{ validator: this.checkPrice, required: true }]
            })(<PriceInput />)}
          </Form.Item>
          <div className='center' >~</div>
          <Form.Item label="IP结束地址">
            {getFieldDecorator('price', {
              // initialValue: { number: 0, currency: 'rmb' },
              rules: [{ validator: this.checkPrice, required: true }]
            })(<PriceInput />)}
          </Form.Item>
          {/* <img key={'operation.key'} src={require('@/assets/images/biaodanxinzeng.svg')} alt='' style={{ width: 30, height: 30 }} onClick={this.onClick}/> */}
        </Form>
      </div>
    )
  } 
}

class PriceInput extends React.Component {
  handleNumberChange = e => {
    const number = parseInt(e.target.value || 0, 10)
    if (isNaN(number)) {
      return
    }
    this.triggerChange({ number })
  };

  handleCurrencyChange = currency => {
    this.triggerChange({ currency })
  };

  triggerChange = changedValue => {
    const { onChange, value } = this.props
    if (onChange) {
      onChange({
        ...value,
        ...changedValue
      })
    }
  };

  render () { 
    const { size, value } = this.props
    return (
      <span>
        <Select
          // value={value.currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="IPV4">IPV4</Option>
          <Option value="IPV6">IPV6</Option>
        </Select>
        <Input
          type="text"
          size={size}
          onChange={this.handleNumberChange}
          style={{ width: '59%', marginRight: '5px', marginLeft: '5px' }}
        />
      </span>
    )
  }
}

// const WrappedDemo = Form.create({ name: 'customized_form_controls' })(Demo)
export default Demo