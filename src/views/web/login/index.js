import React,{Component} from "react"
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Form, Input, Button,message } from 'antd';
import api from '../../../api'
import './style.css'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  onFinish = values => {
    let params = {}
    params["username"] = values.username;
    params["password"] = values.password;
    api.login(params).then(res => {
      if (res.code === '200') {
        localStorage.setItem('ISLOGIN', 1);
        localStorage.setItem('USER', JSON.stringify(res.data.user));
        this.props.dispatch({type : 'setCount', 'count': 0});  //一般调接口拿购物车数量 暂时人工定为1
        // this.props.dispatch({type : 'setLogin', 'islogin': 1});
        // this.props.dispatch({type : 'setUser', 'user': res.data});
        let { history } = this.props;
        history.push({pathname: '/'})
      } else {
        message.error(res.resultMessage);
      }
    });
  };

  render() {
    return (
      <div id="login">
        <dl className="login-top">
          <dt>
            <span>高分辨率对地观测系统浙江数据中心</span>
          </dt>
          <dd>
            <span>浙江大学高分辨率观测系统工程中心</span>
          </dd>
        </dl>
        <div className="login-form">
          <div className="form-header">
            <span>登录公共平台</span>
            <span>LOGIN</span>
          </div>
          <div className="login-ball-box">
            <img src={require("../../../assets/images/login/login_ball.png")} alt="图片" />
          </div>
           <div className="login-form-box">
             <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              >
                <Form.Item
                  label="用户名"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: '用户名不能为空',
                    },
                  ]}
                >
                  <Input placeholder="请输入账号"/>
                </Form.Item>
                <Form.Item
                  label="密码"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password placeholder="请输入密码"/>
                </Form.Item>
                
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return state
}
export default withRouter(connect(mapStateToProps)(Login));