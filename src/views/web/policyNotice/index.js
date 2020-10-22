import React,{Component} from "react"
import {withRouter} from 'react-router-dom';
import MenuCom from '../../../Components/MenuCom'
import './style.css'
const menuObj = {
  title: '信息中心',
    list: [
      {
        name: '新闻动态',
        path: '/newsInfo'
      },
      {
        name: '政策公告',
        path: '/policyNotice'
      },
      {
        name: '专题应用',
        path: '/thematicAppli'
      }
    ]
}
class PolicyNotice extends Component {

  render() {
    return (
      <div className="policy-notice-box">
        <MenuCom menuObj={menuObj} keyValue={'1'} />
        <div>右侧</div>
      </div>
    )
  }
}

export default withRouter(PolicyNotice);