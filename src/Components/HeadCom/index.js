import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  InfoCircleOutlined,
  ShoppingOutlined,
  HomeOutlined,
} from '@ant-design/icons'

import './style.css'
import api from '../../api'

class HeadCom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navList: [
        {
          name: '首页',
          path: '/',
        },
        {
          name: '新闻动态',
          path: '/newsInfo',
        },
        {
          name: '政策公告',
          path: '/policyNotice',
        },
        {
          name: '专题应用',
          path: '/thematicAppli',
        },
        {
          name: '数据获取',
          path: '/dataAcquisition',
        },
        {
          name: '待办事项列表',
          path: '/todoList',
        },
      ],
      adminNavList: [
        {
          name: '首页',
          path: '/admin/home',
        },
        {
          name: '设置',
          path: '/admin/setting',
        },
      ],
    }
  }
  loginIn() {
    //不是后台页面时登录状态的头部上部分
    return (
      <div className="head-login">
        <p className="user-info">
          <span>{JSON.parse(localStorage.getItem('USER')).name}</span>
          <span
            className="user-login-out cursor-style"
            onClick={() => {
              this.handleLoginOut.call(this)
            }}
          >
            注销
          </span>
        </p>
        <p className="user-info">
          {JSON.parse(localStorage.getItem('USER')).userType === '管理员' ? (
            <span
              className="cursor-style"
              style={{ marginRight: '10px' }}
              onClick={() => {
                this.handleClick.call(this, '/admin/home')
              }}
            >
              <HomeOutlined /> 后台管理
            </span>
          ) : (
            <span>
              <ShoppingOutlined />
              购物车 {this.props.count}
            </span>
          )}
          <span className="cursor-style">
            <InfoCircleOutlined /> 帮助
          </span>
        </p>
      </div>
    )
  }
  adminLoginIn() {
    //后台页面时登录状态的头部上部分
    return (
      <div className="head-login">
        <p className="user-info">
          <span>{JSON.parse(localStorage.getItem('USER')).name}</span>
          <span
            className="user-login-out cursor-style"
            onClick={() => {
              this.handleLoginOut.call(this)
            }}
          >
            注销
          </span>
        </p>
        <p
          className="user-info cursor-style"
          onClick={() => {
            this.handleClick.call(this, '/')
          }}
        >
          返回门户首页
        </p>
      </div>
    )
  }
  loginOut() {
    // 未登录状态的头部上部分
    return (
      <div className="head-login">
        <p
          className="user-info cursor-style"
          onClick={() => {
            this.handleLoginIn.call(this)
          }}
        >
          登录
        </p>
        <span className="cursor-style">
          <InfoCircleOutlined /> 帮助
        </span>
      </div>
    )
  }
  getItem() {
    return this.state.navList.map((item, index) => {
      return (
        <div
          key={index}
          className={`cursor-style ${
            item.path === this.props.location.pathname ? 'active-style' : ''
          }`}
          onClick={() => {
            this.handleClick.call(this, item.path)
          }}
        >
          {item.name}
        </div>
      )
    })
  }
  getAdminItem() {
    return this.state.adminNavList.map((item, index) => {
      return (
        <div
          key={index}
          className={`cursor-style ${
            item.path === this.props.location.pathname ? 'active-style' : ''
          }`}
          onClick={() => {
            this.handleClick.call(this, item.path)
          }}
        >
          {item.name}
        </div>
      )
    })
  }

  handleClick = (path) => {
    let { history } = this.props
    history.push({ pathname: path })
  }
  handleLoginIn = () => {
    let { history } = this.props
    history.push({ pathname: '/login' })
  }
  handleLoginOut = () => {
    api.loginOut().then((res) => {
      if (res.code === '200') {
        localStorage.removeItem('ISLOGIN')
        localStorage.removeItem('ACTIVE')
        localStorage.removeItem('USER')
        let { history } = this.props
        history.push({ pathname: '/' })
      } else {
        this.$message.error(res.resultMessage)
      }
    })
  }

  render() {
    const {
      location: { pathname },
    } = this.props
    const hideHeaderPath = ['/login']
    const hideHeader = hideHeaderPath.includes(pathname.trim())
    // console.log(this.props)
    return hideHeader ? null : (
      <dl style={{ marginBottom: '0', minWidth: '1280px', flex: '0' }}>
        <dt className="headCom-top">
          {localStorage.getItem('ISLOGIN') !== '1'
            ? this.loginOut()
            : this.props.location.pathname.indexOf('admin') === -1
            ? this.loginIn()
            : this.adminLoginIn()}
        </dt>
        <dd className="header-bottom">
          <div className="isweb">
            <div className="header-logo">
              <span>高分辨率对地观测系统浙江数据中心</span>
              <span>浙江大学高分辨率观测系统工程中心</span>
            </div>
            <ul className="header-nav">
              <li>
                {this.props.location.pathname.indexOf('admin') === -1
                  ? this.getItem()
                  : this.getAdminItem()}
              </li>
            </ul>
          </div>
        </dd>
      </dl>
    )
  }
}
function mapStateToProps(state) {
  return state
}
export default withRouter(connect(mapStateToProps)(HeadCom))
