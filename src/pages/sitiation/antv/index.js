import React from 'react'
import * as XLSX from 'xlsx';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import DataBinding from '../../../pages/Component/DataBinding'
import { Line, Column, Bar } from '@antv/g2plot';

class antV extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  data = [
    { year: '1991', value: 3 },
    // { year: '1992', value: 4 },
    // { year: '1993', value: 3.5 },
    // { year: '1994', value: 5 },
    // { year: '1995', value: 4.9 },
    // { year: '1996', value: 6 },
    // { year: '1997', value: 7 },
    // { year: '1998', value: 9 },
    // { year: '1999', value: 13 },
  ]

   data2 = [
    {
      type: '家具家电',
      sales: 38,
    },
    // {
    //   type: '粮油副食',
    //   sales: 52,
    // },
    // {
    //   type: '生鲜水果',
    //   sales: 61,
    // },
    // {
    //   type: '美容洗护',
    //   sales: 145,
    // },
    // {
    //   type: '母婴用品',
    //   sales: 48,
    // },
    // {
    //   type: '进口食品',
    //   sales: 38,
    // },
    // {
    //   type: '食品饮料',
    //   sales: 38,
    // },
    // {
    //   type: '家庭清洁',
    //   sales: 38,
    // },
  ]

  componentDidMount() {
    const line = new Line('container', {
      data: this.data,
      xField: 'year',
      yField: 'value',
    });

    line.render()

    this.renderbar()
  }

  renderbar = ()=>{
    // const columnPlot = new Bar('container2', {
    //   data: this.data2,
    //   xField: 'sales',
    //   yField: 'type',
    //   xAxis: {
    //     label: {
    //       autoHide: true,
    //       autoRotate: false,
    //     },
    //   },
    //   meta: {
    //     type: {
    //       alias: '类别',
    //     },
    //     sales: {
    //       alias: '销售额',
    //     },
    //   },
      // minColumnWidth: 20,
      // maxColumnWidth: 20,
    // });

    // columnPlot.render();


    const barPlot = new Bar('container', {
      data: this.data2,
      xField: 'sales',
      yField: 'type',
      meta: {
        type: {
          alias: '类别',
        },
        sales: {
          alias: '销售额',
        },
      },
      minBarWidth: 20,
      maxBarWidth: 20,
      minColumnWidth: 20,
      maxColumnWidth: 20,
    });

    barPlot.render();
  }
  render() {
    return (
      <>
        <div>
          将.xlsx, .xls 等格式的excel文件转成object生成js文件
        </div>
        <div id="container" style={{width: '300px', height:'300px'}}></div>
        {/*  */}
        <div id="container2" style={{width: '300px', height:'300px'}}></div>
      </>
    )
  }
}

export default antV
