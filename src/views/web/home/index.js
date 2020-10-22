import React,{Component} from "react"
import {withRouter} from 'react-router-dom';
import { Carousel,message,Button } from 'antd';
import {connect} from 'react-redux';

import api from '../../../api'
import './style.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselList: []
    }
  }
  componentDidMount() {
    
    api.homeIndex().then(res => {
      if (res.code === '200') {
        const carouselList = res.data.bannerList;
        this.setState({
          carouselList
        })
      } else {
        message.error(res.resultMessage);
      }
    });
  }
  getCarouseList() {
    return (
      this.state.carouselList.map((item,index) =>{
        return (
          <div key={index} className="banner-box">
              <img src={item.imageUrl} alt="图片"/>
              <span className="cursor-style" onClick={()=> {this.handleClickToDetail.call(this, item.id,'banner')}}>{item.title}</span>
          </div>
        )
      })
    )
  }
  handleClickToDetail = (id,type)=> {
    let { history } = this.props;
    history.push({pathname: '/infoDetail',state: {id,type}})
  }

  handClickCount = (type)=> {
    let newCount = this.props.count;
    if(type === 'add') {
      newCount++;
      this.props.dispatch({type : 'setCount', 'count': newCount});
    }else{
      newCount--;
      this.props.dispatch({type : 'setCount', 'count': newCount});
    }
  }
  render() {
    return (
      <div id="home">
        <div id="home-box">
          <dl className="home-box">
            <dt>
              <div className="lunbo-box">
                <Carousel autoplay>
                  {this.getCarouseList()}
                </Carousel>
              </div>
            </dt>
            <dd>
                <Button onClick={()=> {this.handClickCount.call(this,'add')}}>购物车数量+1</Button>
                <Button onClick={()=> {this.handClickCount.call(this,'del')}}>购物车数量-1</Button>
            </dd>
          </dl>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return state
}
export default withRouter(connect(mapStateToProps)(Home));