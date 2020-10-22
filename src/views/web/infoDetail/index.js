import React,{Component,Fragment} from "react"
import {withRouter} from 'react-router-dom';
import { message } from 'antd';

import api from '../../../api'
import './style.css'
class InfoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailObj: {}
    }
  }
  getDetail() {
    return (
      <div id="infoDetail">
        <div className="info-detail-box">
          <dl>
            <dt>
              <h4>{this.state.detailObj.title}</h4>
              <p><span>发布时间：</span><span>{this.state.detailObj.createTime}</span></p>
            </dt>
            <dd dangerouslySetInnerHTML={{ __html: this.state.detailObj.content }}></dd>
          </dl>
        </div>
      </div>
    )
  }
  componentDidMount() {
    let params = {};
    params['id'] = this.props.location.state.id;
    if(this.props.location.state.type === 'banner') {
      api.bannerDetail(params).then(res => {
        if (res.code === '200') {
          const detailObj = res.data;
          this.setState({detailObj})
        } else {
          message.error(res.resultMessage);
        }
      });
    }else if(this.props.location.state.type === 'news') {
      api.newsDetail(params).then(res => {
        if (res.code === '200') {
          const detailObj = res.data;
          this.setState({detailObj})
        } else {
          message.error(res.resultMessage);
        }
      });
    }
  }
  render() {
    return (
      <Fragment>
        {this.getDetail()}
      </Fragment>
    )
  }
}

export default withRouter(InfoDetail);