import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Pagination, Checkbox, Select, Form, Input, Button, } from 'antd';
import style from './index.less';
import SearchView from './Search';
const { Option } = Select;

let len = 55
const getList = (cur) => {

  let arr = []
  for (let i = 0; i < len; i++) {
    arr.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    })
  }

  return arr.slice(cur - 10, cur)
}
const defaultCheckedStatus = () => {
  let keyArr = []
  let valueArr = Array(10).fill(false)
  for (let i = 0; i < len / 10; i++) {
    keyArr.push(valueArr)
  }

  return keyArr
}

export default () => {
  let [recordsList, setRecordsList] = useState(getList(10))
  let [currentPage, setCurrentPage] = useState(0)
  let [checked, setChecked] = useState(false)
  let [checkStatusArr, setCheckStatusArr] = useState(defaultCheckedStatus())
  let [showSelectLen, setShowSelectLen] = useState(0)
  let [status, setStatus] = useState('cur')

  const onChangePage = (page, pageSize) => {
    setRecordsList(getList(10 * page))
    setCurrentPage(page - 1)
    if (status === 'cur') {
      let curList = checkStatusArr[page - 1].filter(item => item)
      setShowSelectLen(curList.length)
    } else {
      let arrList = []
      for (let i = 0; i < checkStatusArr.length; i++) {
        for (let j = 0; j < checkStatusArr[i].length; j++) {
          if (checkStatusArr[i][j]) {
            arrList.push(checkStatusArr)
          }
        }
      }

      setShowSelectLen(arrList.length)
    }
  }
  const onCheckbox = (e, index) => {
    const { checked } = e.target
    console.log(`当前第${currentPage}页, 第${index}行`, `${checked ? "被选中" : '被取消'}`)
    let wrapArr = []
    for (let i = 0; i < checkStatusArr.length; i++) {
      let arr = []
      for (let j = 0; j < checkStatusArr[i].length; j++) {
        arr.push(checkStatusArr[i][j])

      }
      wrapArr.push(arr)
    }
    wrapArr[Number(currentPage)][Number(index)] = checked
    setCheckStatusArr(wrapArr)
    if (status === 'cur') {
      let curList = wrapArr[currentPage].filter(item => item)
      setShowSelectLen(curList.length)
    } else if (status === 'all') {
      let arrList = []
      for (let i = 0; i < wrapArr.length; i++) {
        for (let j = 0; j < wrapArr[i].length; j++) {
          if (wrapArr[i][j]) {
            arrList.push(wrapArr)
          }
        }
      }

      setShowSelectLen(arrList.length)
    }
  }

  const onChageChexked = () => {
    setChecked(!checked)
  }
  const handleChange = (value) => {
    setStatus(value)
  }
  return (
    <div className="main">
      <SearchView >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </SearchView>
      <button onClick={onChageChexked}>改变Child</button>
      <Select defaultValue="cur" style={{ width: 120 }} onChange={handleChange}>
        <Option value="all">全部</Option>
        <Option value="cur">当前页面</Option>
      </Select>
      总共选择{showSelectLen}条
      {
        recordsList.map((item, index) => {
          const isChecked = checkStatusArr[Number(currentPage)][Number(index)]
          return (
            <div key={item.key} className={`${style.block}  ${isChecked ? style.target : ''}`}>
              <Checkbox
                onChange={(e) => { onCheckbox(e, index) }}
                checked={isChecked}
              ></Checkbox>
              <div>{item.name}</div>
            </div>
          )
        })
      }
      <Pagination
        onChange={onChangePage}
        total={len}
        showTotal={total => `Total ${recordsList.length} items`}
        defaultPageSize={10}
        defaultCurrent={1}
      />
    </div>
  )
}
