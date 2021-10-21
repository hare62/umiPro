

import React from 'react'
import {
  Form,
  Select,
  Button,
  Input
} from 'antd';
// import { debounce } from 'lodash'
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

/*
  单链表实现
  通过LinkedList的类创建链表实例，链表下有添加，查找，删除，显示节点的方法
  链表初始默认有一个"_head"头部节点，链表中不显示
*/


function debounce (func, wait) {

  let timer;
  return function(e) {
    console.log('--内存111--', e.targrt.value)
     let args  = arguments
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, [e])
    }, wait)
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  changeValues = (rule, value, callback) => {
    console.log('-rule--', rule)
    console.log('-value--', value)
    console.log('-callback--', callback)
    return true
    // if(value.length > 2){
    //   callback('超出了两个长度')
    // }
    // const { setFieldsValue } = this.props.form;
    // let newArr;
    // if (value.length > 2) {
    //   newArr = [].concat(value.slice(0, 2), value.slice(-1));
    //   setFieldsValue({
    //     "select-multiple": newArr,
    //   })
    //   callback('最多两条数据')
    // } else {
    //   newArr = value;
    //   callback()
    // }
  }

  onChange = debounce((e) => {
    console.log('--内存--', e)
  },1000)


  onChanges = (e)=>{
    e.persist()
    console.log('--内存222222--', e.target.value)
    this.setState({value:e.target.value})
  }
  render() {

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    }


    return (
      <div >
        {/* <Button onClick={(e)=>{this.onChange(e)}}>kkkkkkkooooo</Button> */}
        {/* <Input onClick={(e)=>{this.onChange(e)}}/> */}
        <Input onChange={e => this.onChanges(e)} />
        kkkkkkkkkkkkkkkkkk
        {/* <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          initialValues={{
            'select-multiple': ['blue'],
          }}
        >
          <Form.Item
            name="select-multiple"
            label="Select[multiple]"
            rules={[
              {
                required: true,
                message: 'Please select your favourite colors!',
                type: 'array',
              },
              ({ setFieldsValue }) => ({
                validator(_, value) {
                  if (value.length <= 2) {
                    return Promise.resolve();
                  }else{
                    setFieldsValue({'select-multiple': value.slice(0,2)})
                    return Promise.reject(new Error('最多只能选择两个'));
                  }
                },
              }),
            ]}
          >
            <Select mode="multiple" placeholder="Please select favourite colors">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form> */}
      </div>
    )
  }
}

export default Footer
