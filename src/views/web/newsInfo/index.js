import React,{Component} from "react"
import {withRouter} from 'react-router-dom';
import MenuCom from '../../../Components/MenuCom'
import './style.css'
import api from '../../../api'
import { Pagination,message } from 'antd';

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
class NewsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      page: 1,
      limit: 10,
      total: 0
    }
    this.changePageSize = this.changePageSize.bind(this);
    this.changeSize = this.changeSize.bind(this);
  }
  getList() {
    let params = {};
    params["pageNum"] = this.state.page;
    params["showNum"] = this.state.limit;
    api.newsList(params).then(res => {
      if (res.code === '200') {
        this.setState({
          list: res.data.dataList,
          total: res.data.totalNum
        })
      } else {
        message.error(res.resultMessage);
      }
    });
  }
  getItem() {
    return(
      this.state.list.map((item,index) =>{
        return (
          <div key={index} className="single-div cursor-style" onClick={()=> {this.handClickToDetail.call(this,item.id,'news')}}>
            <i></i>
            <span>{item.title}</span>
            <span>{item.createTime}</span>
          </div>
        )
      })
    )
  } 
  handClickToDetail=(id,type)=> {
    let { history } = this.props;
    history.push({pathname: '/infoDetail',state: {id,type}})
  }
  componentDidMount() {
    this.getList();
  }
  changePageSize(page, pageSize) {
    this.setState({
      page: page,
      limit: pageSize
    }, () => {
      this.getList()
    })
  }
  changeSize(current, size) {
    this.setState({
      page: current,
      limit: size
    }, () => {
      this.getList()
    })
  }
  render() {
    return (
      <div className="new-list-box">
        <MenuCom menuObj={menuObj} keyValue={'0'} />
        <div className="list-content">
          <div>{ this.getItem() }</div>
          <Pagination
            size="small"
            total={this.state.total}
            defaultCurrent={ this.state.page }
            current={ this.state.page }
            showSizeChanger
            showQuickJumper
            showTotal={total => `共${total}条`}
            onChange={this.changePageSize}
            onShowSizeChange={this.changeSize}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(NewsInfo);