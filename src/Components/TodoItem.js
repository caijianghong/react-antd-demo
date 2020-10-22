import React, { Component } from 'react'
import { Button } from 'antd'

class TodoItem extends Component {
  //子组件如果要跟父组件通信，子组件要调用父组件传递过来的方法
  constructor(props) {
    super(props)
    this.handleBtnDelete = this.handleBtnDelete.bind(this)
  }
  handleBtnDelete() {
    this.props.handleDelete(this.props.index)
  }
  render() {
    const { content } = this.props
    return (
      <div style={{ width: '350px', margin: '10px auto' }}>
        <span style={{ display: 'inline-block', width: '200px' }}>
          {content}
        </span>
        <Button type="primary" onClick={this.handleBtnDelete}>
          delete
        </Button>
      </div>
    )
  }
}

export default TodoItem
