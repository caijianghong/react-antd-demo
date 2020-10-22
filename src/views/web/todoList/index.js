import React,{Component,Fragment} from "react"
import TodoItem from '../../../Components/TodoItem';
import { Button,Input } from 'antd';
class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleBtnDelete = this.handleBtnDelete.bind(this);
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value 
    })
  }
  handleBtnDelete(index) {
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({list})
  }
  getItem() {
    return (
      this.state.list.map((item,index) =>{
        return (
          <TodoItem 
          handleDelete={this.handleBtnDelete} 
          key={index} 
          content={item} 
          index={index}/>
        )
      })
    )
  }

  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接受父组件传递过来的参数
  //React.Fragment标签
  render() {
    return (
      <Fragment> 
        <div style={{width: '350px',margin: '50px auto'}}>
          <Input placeholder="请输入" style={{width: '200px'}} value={this.state.inputValue} onChange={this.handleInputChange}/>
          {/* <input value={this.state.inputValue} onChange={this.handleInputChange}/> */}
          <Button type="primary" onClick={this.handleBtnClick}>add</Button>
        </div>
        <ul>{this.getItem()}</ul>
      </Fragment>
    )
  }
}

export default TodoList;