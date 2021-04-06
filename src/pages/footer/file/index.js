import React from 'react'
import './index.less'

/* 
  单链表实现
  通过LinkedList的类创建链表实例，链表下有添加，查找，删除，显示节点的方法
  链表初始默认有一个"_head"头部节点，链表中不显示
*/
class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount (){
    this.init()
  }

  LinkedList = (rest)=>{
    let _head = new Node('_head')
    let p = _head
    for(let i = 0; i < rest.length; i++ ){
      let newNode = new Node(rest[i]) 
      p.next = newNode
      p = p.next
    }
    console.log('_head', _head)
    return _head
  }

  init() {
    // 创建节点类 Node
    function Node(element) {
      this.element = element
      this.next = null
    }
    
    // 创建单链表对象实例类
    function LinkedList(...rest) {
      this._head = new Node('_head')
      if(rest.length){
        let p = this._head
        for(let i = 0; i < rest.length; i++){
          let newNode = new Node(rest[i])
          p.next = newNode
          p = p.next
        }
      }
    }
    LinkedList.prototype.find = find
    LinkedList.prototype.findPrev = findPrev
    LinkedList.prototype.push = push
    LinkedList.prototype.insert = insert
    LinkedList.prototype.remove = remove
    LinkedList.prototype.size = size
    LinkedList.prototype.display = display
    LinkedList.prototype.reversal = reversal
    // 查找函数，在链表中查找item的位置，并把它返回，未找到返回-1
    function find(item) {
      // 1.查找当前节点是不是和要找的节点，如果不是就下一个节点
      let currNode = this._head;

      while (currNode !== null && currNode.element !== item) {
        currNode = currNode.next;
      }

      if (currNode.element === item) {
        return currNode;
      } else if (currNode.element !== item || currNode === null) {
        return -1;
      }
    }
    // 插入节点，找到要插入到的item的节点位置，把新节点插到item后面
    /**
     * 
     * @param {*} newElement 
     * @param {*前驱节点} item 
     * @returns 
     */
    function insert(newElement, item) {
      let insertNode = new Node(newElement);
      let currNode = this.find(item)
      if (currNode) {
        insertNode.next = currNode.next
        currNode.next = insertNode
      } else {
        return -1
      }
    }

    // 寻找目标节点item的上一个节点，未找到返回-1 
    function findPrev(item) {
      let currNode = this._head;
      while (currNode !== null) {
        if (currNode.next.element !== item) {
          currNode = currNode.next
        } else if (currNode.next.element === item) {
          return currNode
        }
      }
      return -1
    }
    
    // 在链表最后一位添加元素
    function push(element) {
      let currNode = this._head
      let newNode = new Node(element)
      while (currNode.next !== null) {
        currNode = currNode.next
      }
      currNode.next = newNode
    }
    // 删除节点，找到删除的位置，删除，未找到提示错误
    function remove(item) {
      // 找到当前和上一个节点，让上一个节点的next指向item下一个节点
      let currNode = this.find(item)
      let preNode = this.findPrev(item)
      if (currNode && preNode) {
        preNode.next = currNode.next
      } else {
        return -1
      }
    }
    // 返回链表的长度
    function size() {
      let currNode = this._head
      let tempIndex = 0
      while (currNode.next !== null) {
        currNode = currNode.next
        tempIndex += 1
      }

      return tempIndex

    }
    // 链表的展示
    function display() {
      // 链表展示和使用，默认头部不存在
      let currNode = this._head.next
      let arr = []
      while (currNode !== null) {
        arr.push(currNode.element)
        currNode = currNode.next
      }
      return arr
    }
    // 链表反转=>递归
    function reversal() {
      function reversalList(item) {
        if (item.next) {
          let tmpItem = reversalList(item.next)
          item.next = null
          tmpItem.next = item
          return item
        } else {
          obj._head.next = item
          return item
        }
      }
      reversalList(obj._head.next)
    }
    // 运行测试
    let obj = new LinkedList('节点0', '节点1', '节点2', '节点3', '节点4', '节点5')
    console.log('---实例对象obj', obj)
    // console.log(obj)
    obj.remove('节点5')
    console.log(obj.display())
    // console.log('---末尾插入元素')
    // obj.push('push插入')
    // console.log(obj)
    // // console.log('---元素后插入元素')
    // obj.insert('元素插入', '节点2')
    // console.log(obj.display())
    // console.log('---索引处插入元素')
    // console.log('---查找元素位置')
    // console.log(obj.find('节点4'))
    // console.log('---移除元素')
    // console.log('---移除索引元素')
    // console.log(obj.display())
    // console.log('---元素长度')
    // obj.reversal()
    // console.log(obj.display())
  }

  


  render() {
    return (
      <div >
        footer页面
        <div style={{width: '100px', height: '30px', backgroundColor: 'honeydew', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius:'5px'}}>
          节点2
          <spn style={{marginLeft:'10px',width:'20px', height:'20px',borderRadius:'50px',backgroundColor:'#ef5d5a',display:'flex',justifyContent:'center', color:'white'}}>X</spn>
        </div>
      </div>
    )
  }
}

export default Footer