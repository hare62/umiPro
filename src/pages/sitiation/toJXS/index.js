import React from 'react'
import * as XLSX from 'xlsx';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import DataBinding from '../../Component/DataBinding'

class ToPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
  }

  outputFile = (workbook) => {
    var sheetNames = workbook.SheetNames; // 工作表名称集合
    sheetNames.forEach(name => {
      var worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表
      for (var key in worksheet) {
        // v是读取单元格的原始值
        console.log(key, key[0] === '!' ? worksheet[key] : worksheet[key].v);
      }
    });
  }

  onImportExcel = file => {
    // 获取上传的文件对象
    const { files } = file.target;
    // 通过FileReader对象读取文件
    const fileReader = new FileReader();
    fileReader.onload = event => {
      try {
        const { result } = event.target;
        // 以二进制流方式读取得到整份excel表格对象
        const workbook = XLSX.read(result, { type: 'binary' });
        this.outputFile(workbook)
        let data = []; // 存储获取到的数据
        let dataKEY = [];
        // 遍历每张工作表进行读取（这里默认只读取第一张表）
        for (const sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            dataKEY.push(sheet)
            // 利用 sheet_to_json 方法将 excel 转成 json 数据
            // data = data.concat(XLSX.utils.sheet_to_csv(workbook.Sheets[sheet]));
            // break; // 如果只取第一张表，就取消注释这行
          }
        }

        let jsx = ''

        dataKEY.forEach((item) => {
          let dataList = XLSX.utils.sheet_to_json(workbook.Sheets[item]);
          console.log('--dataList--0', dataList)
          for(let i = 0; i < dataList.length; i++){
            let param = dataList[i]['参数名']
            let title = dataList[i]['描述']
            jsx += `<Column title=\'${title}\'>
             <ColumnRender dataIndex=\'${param}\' >
              </ColumnRender>
            </Column>\n`
          }

          // let newString = dataList.replaceAll(',', ': \'')
          // let newO = newString.replaceAll('\n', '\',\n')
          // this.download(item + '.js', 'export default {' + newO + '}')
          this.download(item + '.js', jsx)
        })

        console.log('-jsx---', jsx)



        // var dataList = XLSX.utils.sheet_to_csv(workbook.Sheets.People);
        // let newString = dataList.replaceAll(',', ': \'')
        // let newO = newString.replaceAll('\n', '\',\n')
        // this.download('chineseObj.js', 'export default {' + newO+ '}')
      } catch (e) {
        // 这里可以抛出文件类型错误不正确的相关提示
        return;
      }
    };
    // 以二进制方式打开文件
    fileReader.readAsBinaryString(files[0]);
  }

  download = (filename, text) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  render() {
    return (
      <>
        <div>
          将接口字段转成jsx代码
        </div>
        <input type='file' accept='.xlsx, .xls' onChange={this.onImportExcel} />
      </>
    )
  }
}

export default ToPage
