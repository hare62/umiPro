import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Pagination, Checkbox, Select, Form, Input, Button, } from 'antd';
import style from './index.less';
import SearchView from './Search';
import Link from 'umi/link';
// import
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
  let [curnum, setCurnum] = useState(1)
  let [checked, setChecked] = useState(false)
  let [checkStatusArr, setCheckStatusArr] = useState(defaultCheckedStatus())
  let [showSelectLen, setShowSelectLen] = useState(0)
  let [status, setStatus] = useState('cur')
  let [initialValues, setinitialValues] = useState({ username: '===' })

  useEffect(() => {
    // console.log('--加载-checkStatusArr--',  JSON.stringify(checkStatusArr))
    // if(sessionStorage.getItem('isCache') === 'true'){
    //   let str = sessionStorage.getItem('select')
    //   console.log('--驾照sessionStorage.getItem--', str)
    //   setCheckStatusArr(str)
    // }
    if(sessionStorage.getItem('isCache') === 'true'){
      let select = JSON.parse(sessionStorage.getItem('select'))
      setCheckStatusArr(select)
      sessionStorage.setItem('isCache', false)
      console.log('----', Number(sessionStorage.getItem('curNum')))
      setCurnum(Number(sessionStorage.getItem('curNum')))
      setRecordsList(getList(10 * Number(sessionStorage.getItem('curNum'))))
      sessionStorage.removeItem('curNum')
      sessionStorage.removeItem('select')
      sessionStorage.removeItem('isCache')
        setShowSelectLen(Number(sessionStorage.getItem('curList')))
    }
  }, [checkStatusArr, currentPage])

  const onChangePage = (page, pageSize) => {
    setRecordsList(getList(10 * page))
    console.log('----checkStatusArr', checkStatusArr)
    setCurrentPage(page-1)
    setCurnum(page)
    if (status === 'cur') {
      let curList = checkStatusArr[page - 1].filter(item => item)
      setShowSelectLen(curList.length)
      sessionStorage.setItem('curNum', JSON.stringify(page))
      sessionStorage.setItem('curList', JSON.stringify(curList.length))
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
    console.log('--currentPage-',currentPage)
    wrapArr[Number(currentPage)][Number(index)] = checked
    setCheckStatusArr(wrapArr)
    if (status === 'cur') {
      let curList = wrapArr[currentPage].filter(item => item)
      setShowSelectLen(curList.length)
      sessionStorage.setItem('select', JSON.stringify(wrapArr))
      sessionStorage.setItem('curList', JSON.stringify(curList.length))
      // currentPage

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
  const reset = () => {
    setinitialValues({})
  }
  const handleClick = ()=>{
    sessionStorage.setItem('isCache', true)
  }
  // console.log()
  return (
    <div className="main">
      <SearchView initialValues={initialValues} reset={reset}>
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
          const isChecked = checkStatusArr[Number(curnum-1)][Number(index)]
          // console.log(`第${currentPage}页第${index}行  ${isChecked}`)
          // console.log('----checkStatusArr', checkStatusArr)
          return (
            <div key={item.key} className={`${style.block}  ${isChecked ? style.target : ''}`}>
              <Checkbox

                onChange={(e) => { onCheckbox(e, index) }}
                checked={isChecked}
              ></Checkbox>
              <div>{item.name}</div>
              <Button onClick={handleClick}><Link to="/web/List/Detail">Go to list page</Link></Button>
            </div>
          )
        })
      }
      <Pagination
        onChange={onChangePage}
        total={len}
        showTotal={total => `Total ${recordsList.length} items`}
        defaultPageSize={10}
        current={curnum}
      />
    </div>
  )
}
