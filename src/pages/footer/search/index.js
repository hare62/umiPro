import React, { Component } from 'react'
import { Form, Select, Input, Button, Row, Col } from 'antd'
// import './index.less'
const { Option } = Select
class BugRepair extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }
  render() {
    const { getFieldDecorator } = this.props.form
    let files = [
      { type: 'input', name: '综合查询', key: 'name', initialValue: '', rules: [{ required: true, message: 'Please input your note!' }], placeholder: '告警编码/国资码/IP/操作用户' },
      { type: 'select', name: '资产状态', key: 'level', data: [{ value: '已退回', name: '已退回' }, { value: '已报废', name: '已报废' }], placeholder: '全部' },
      { type: 'select', name: '告警级别', key: 'level2', data: [{ value: '紧急', id: '紧急' }, { value: '中危', id: '中危' }], placeholder: '全部',  config: { name: 'id', value: 'value' } },
    ]

    return (
      <div className="main-table-content">
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 19 }} onSubmit={this.handleSubmit}>
          <Row>
            {
              files.map((item)=>{
                if (item.type === 'input') {
                  return (
                    <Col span={8} className='block-item' key={item.key}>
                      <Form.Item label={item.name}>
                        {getFieldDecorator(item.key, {
                          rules: item.rules,
                          initialValue: item.initialValue
                        })(<Input autoComplete="off" placeholder={item.placeholder || '请输入'} />)}
                      </Form.Item>
                    </Col>
                  )
                }

                if (item.type === 'select') {
                  let { name, value } = item.config || {}
                  item.data.unshift({ [name || 'name']: '全部', [value || 'value']: null })
                  return (
                    <Col span={8} className='block-item'>
                      <Form.Item label={item.name}>
                        {getFieldDecorator(item.key, {
                          rules: item.rules,
                          initialValue: item.initialValue
                        })(
                          <Select
                            placeholder={item.placeholder}
                          >
                            {
                              item.data.map((e, i)=>{
                                return (
                                  <Option value={e[value || 'value']}>{e[name || 'name']}</Option>
                                )
                              })
                            }
                          </Select>,
                        )}
                      </Form.Item>
                    </Col>
                  )
                }
              })
            }
            <Col span={8} className='block-item'>
              <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

// const WrappedApp = Form.create()(BugRepair)
export default BugRepair
