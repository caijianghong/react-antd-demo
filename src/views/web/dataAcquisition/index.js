import React,{Component} from "react"
import {withRouter} from 'react-router-dom';

import './style.css'
class DataAcquisition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailObj: {}
    }
  }
  
  componentDidMount() {
    // this.cesiumInit();
  }
  render() {
    return (
      <div id="cesiumContainer">三维球</div>
    )
  }
}

export default withRouter(DataAcquisition);