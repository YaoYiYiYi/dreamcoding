import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentInput from './CommentInput'

class App extends React.Component {
  // 静态属性
  state = {
    commentList: []

  }
  onPublish = (userName, comment) => {
    console.log(userName,comment)
    let c = {userName,comment}
    // 不可变的数据
    // let obj = {} 
    // let obj1 = Object.create({},obj)
    let list = this.state.commentList.slice(0)
    list.push(c)
    // this.state.commentList = list 因为react里面要改变state的值就必须在setState里面改
    this.setState({
      commentList: list
    })
  }
  render = () => {
    return  (
    <>
      <CommentInput onPublish={this.onPublish}/>
      {/* <CommentList/> */}
      {this.state.commentList.length}
      {this.state.commentList && this.state.commentList.map(
        (c,i) => {
          return (
            <li key={i}>
              {c.userName}: {c.comment}
              <button data-i={i} onClick={this.handleDelete}>删除</button>
            </li>
          )
        }
      )}
    </>
    )
  }
  handleDelete = (event) => {
    // del i ?
    const i = parseInt(event.target.dataset.i)
    // this.state.commentList.splice(i,1)
    const list = this.state.commentList.slice(0)
    list.splice(i,1)
    this.setState({
      commentList: list
    })
  }
}


export default App;
