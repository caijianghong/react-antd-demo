import axios from "axios";

import { message } from 'antd';
const tip = msg => {
  message.error(msg);
};

const errorHandle = (status, other) => {
  switch (status) {
    case "600004":
      tip("用户未登录");
      break;
    case "600005":
      break;
    default:
      tip(other);
      break;
  }
};
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

// 请求拦截器
axios.interceptors.request.use(
  config => {
    const requestToken = localStorage.getItem("STOKEN");
		if (requestToken) {
			if (
				config.data === "" ||
				config.data === null ||
				config.data === undefined
			) {
				if (config.params) {
					config.params["requestToken"] = requestToken; // get请求
				} else {
					config.params = {};
					config.params["requestToken"] = requestToken;
				}

				return config;
			} else {
				
					config.data["requestToken"] = requestToken; //post请求
				

				return config;
			}
		} else {
			return config;
		}
	},
	error => Promise.error(error)
);

// 响应拦截器
axios.interceptors.response.use(res => {
    // 请求成功
    if (res.status === 200) {
			return Promise.resolve(res.data);
		} else {
			errorHandle(res.data.msg, res.data.msg);
			return Promise.reject(res.data);
		}
  },
  // 请求失败
  error => {
    const {
			response
		} = error;
		if (response) {
			// 请求已发出，但是不在2xx的范围
			errorHandle(response.data.msg, response.data.msg);
			return Promise.reject(response.data);
		}
  });
export default axios;
