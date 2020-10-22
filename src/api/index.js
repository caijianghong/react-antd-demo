import base from "./base"; // 导入接口域名列表
import axios from "./http";
const api = {
	login(params) {
		return axios.post(base+ '/login',params);
	},
	loginOut() {
		return axios.post(base+ '/loginOut');
	},
	homeIndex() {
		return axios.get(base+ '/index');
	},
	thematicDetail(params) {
		return axios.get(base+ '/thematicDetail',{params:params});
	},
	newsDetail(params) {
		return axios.get(base+ '/newsDetail',{params:params});
	},
	bannerDetail(params) {
		return axios.get(base+ '/bannerDetail',{params:params});
	},
	policyDetail(params) {
		return axios.get(base+ '/policyDetail',{params:params});
	},
	newsList(params) {
		return axios.get(base+ '/newsList',{params:params});
	},
	policyList(params) {
		return axios.get(base+ '/policyList',{params:params});
	},
	thematicList(params) {
		return axios.get(base+ '/thematicList',{params:params});
	}
};
export default api;