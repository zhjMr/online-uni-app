// 引入http请求文件
import request from "@/utils/request.js"
//获取登录接口数据
const getUserLogin = (data) => {
	return request({
		url: "/mobile/login",
		method: 'POST',
		data
	})
}
//获取注册接口数据
const getUserSing = (data) => {
	return request({
		url: "/mobile/reg",
		method: 'POST',
		data
	})
}
//获取绑定手机号接口数据
const getBindPhone = (data) => {
	return request({
		url: "/mobile/bind_mobile",
		method: 'POST',
		data
	})
}
//获取手机验证码接口数据
const getChangeCode = (data) => {
	return request({
		url: "/mobile/get_captcha",
		method: 'POST',
		data
	})
}
//获取找回密码接口数据
const getforget = (data) => {
	return request({
		url: "/mobile/forget",
		method: 'POST',
		data
	})
}
//获取退出登录接口数据
const getLoginOut = () => {
	return request({
		url: "/mobile/logout",
		method: 'POST',

	})
}
export default {
	getUserLogin,
	getUserSing,
	getBindPhone,
	getChangeCode,
	getforget,
	getLoginOut
}
