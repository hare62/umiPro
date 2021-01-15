import React from 'react'
import * as XLSX from 'xlsx';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import './index.less'


class Business extends React.Component {
    constructor(props) {
        super(props)
    }

    // 将csv转换成简单的表格，会忽略单元格合并，在第一行和第一列追加类似excel的索引
    csv2table = (csv) => {
        var html = '<table  className="table-border">';
        var rows = csv.split('\n');
        rows.pop(); // 最后一行没用的
        let arr = []
        let oneArr = rows[0].split(',')
        rows.shift()
        rows.forEach(function (row, idx) {

            var columns = row.split(',');
            let obj = {}
            for (var i = 0; i < columns.length; i++) {
                obj[oneArr[i]] = columns[i]
            }
            html += '<tr>';
            columns.forEach(function (column) {
                html += '<td>' + column + '</td>';
            });
            html += '</tr>';

            arr.push(obj)
        });
        html += `</table >`;
        console.log('--html-', html)
        return html;
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
                // 遍历每张工作表进行读取（这里默认只读取第一张表）
                console.log("---读取文件对象", workbook)
                for (const sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // 利用 sheet_to_json 方法将 excel 转成 json 数据
                        data = data.concat(XLSX.utils.sheet_to_csv(workbook.Sheets[sheet]));
                        console.log("----yige yige data", data)
                        // break; // 如果只取第一张表，就取消注释这行
                    }
                }
                // var csv = XLSX.utils.sheet_to_csv(data);
                // console.log("--csv-",csv
                // console.log("---data",data)
                // document.getElementById('result').innerHTML = this.csv2table(data);

                var csv = XLSX.utils.sheet_to_csv(workbook.Sheets.Sheet1);
                // console.log("----看看这个数据",csv)
                document.getElementById('result').innerHTML = this.csv2table(csv);
            } catch (e) {
                // 这里可以抛出文件类型错误不正确的相关提示
                return;
            }
        };
        // 以二进制方式打开文件
        fileReader.readAsBinaryString(files[0]);
    }

    sheet2blob = (sheet, sheetName) => {
        sheetName = sheetName || 'sheet1';
        var workbook = {
            SheetNames: [sheetName],
            Sheets: {}
        };
        workbook.Sheets[sheetName] = sheet;
        // 生成excel的配置项
        var wopts = {
            bookType: 'xlsx', // 要生成的文件类型
            bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
            type: 'binary'
        };
        var wbout = XLSX.write(workbook, wopts);
        var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
        // 字符串转ArrayBuffer
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        return blob;
    }
    
    render() {
        return (
            <>
                <input type='file' accept='.xlsx, .xls' onChange={this.onImportExcel} />
                <div id='result'></div>
            </>
        )
    }
}

export default Business