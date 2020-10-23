import React from 'react';
import Home from '../views/web/home';
import NewsInfo from '../views/web/newsInfo';
import Login from '../views/web/login';
import PolicyNotice from '../views/web/policyNotice';
import ThematicAppli from '../views/web/thematicAppli';
import InfoDetail from '../views/web/infoDetail';
import DataAcquisition from '../views/web/dataAcquisition';
import TodoList from '../views/web/todoList';
import AdminHome from '../views/admin/home';
import Setting from '../views/admin/setting';
import {GlobalStyle} from '../style';
// import { BrowserRouter  as Router,Route} from 'react-router-dom'
import { HashRouter as Router,Route} from 'react-router-dom'
import HeadCom from '../Components/HeadCom';
import FootCom from '../Components/FootCom';
import { ConfigProvider } from 'antd'; //antd 目前的默认文案是英文，如果需要使用其他语言
import zhCN from 'antd/es/locale/zh_CN'; //使用中文
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/policyNotice",
    component: PolicyNotice
  },
  {
    path: "/newsInfo",
    component: NewsInfo
  },
  {
    path: "/thematicAppli",
    component: ThematicAppli
  },
  {
    path: "/todoList",
    component: TodoList
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/admin/home",
    component: AdminHome,
  },
  {
    path: "/admin/setting",
    component: Setting,
  },
  {
    path: "/infoDetail",
    component: InfoDetail,
  },
  {
    path: "/dataAcquisition",
    component: DataAcquisition,
  }
]
class Routers extends React.Component {
	render(){
   
		return(
        <ConfigProvider locale={zhCN}>
          <Router>
            <GlobalStyle/>
            <HeadCom /> 
            <div style={{flex: 1}}>
              {
                routes.map((item,index)=>{
                  return <Route exact key={index} path={item.path} render={()=>(<item.component/>)}/>
                })
              }
            </div>
            <FootCom />
          </Router>
        </ConfigProvider>
      )
		}
	}
export default Routers;
