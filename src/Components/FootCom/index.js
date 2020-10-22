import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './style.css'
class FootCom extends Component {
  render() {
    const {
      location: { pathname },
    } = this.props
    const hideFootPath = ['/login']
    const hideFoot = hideFootPath.includes(pathname.trim())
    // console.log(this.props);
    return hideFoot ? null : (
      <div id="footerComponent">
        <div className="foot-nav-box">
          <div className="foot-nav">
            <dl>
              <dt>
                <strong>
                  <span>高分辨率对地观测系统浙江数据中心</span>
                  <span>浙江大学高分辨率观测系统工程中心</span>
                </strong>
                <i></i>
              </dt>
              <dd>
                <strong>Copyright © 2013 CHEOS All rights reserved.</strong>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(FootCom)
