import React,{Component} from "react"
import {withRouter} from 'react-router-dom';
import { Menu } from 'antd';
import {BarsOutlined} from '@ant-design/icons';
import './style.css'
const { SubMenu } = Menu;
class MenuCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: this.props.menuObj.list
    }
  }
  getItem() {
    return (
      this.state.menuList.map((item,index) =>{
        return (
          <Menu.Item key={index} onClick={()=> {this.handClickSigle.call(this,item.path)}}>{item.name}</Menu.Item>
        )
      })
    )
  }
  handClickSigle = (path)=> {
    let { history } = this.props;
    history.push({pathname: path})
  }
  render() {
    const {menuObj,keyValue} = this.props;
    return (
      <Menu
          style={{ width: 200 }}
          defaultSelectedKeys={[keyValue]}
          defaultOpenKeys={['sub']}
          mode="inline"
        >
          <SubMenu key="sub" icon={<BarsOutlined />} title={menuObj.title}>
            {this.getItem()}
          </SubMenu>
        </Menu>
    )
  }
}
export default withRouter(MenuCom)