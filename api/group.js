import request from "@/utils/request.js"
//获取创建订单接口数据
const getCarterGroup = (data) => {
	return request({
		url: "/mobile/goods/read",
		method: "GET",
		data
	})
}
//获取点击收藏
const getCartercollect = (data) => {
	return request({
		url: "/mobile/collect",
		method: "POST",
		data
	})
}
// 获取收藏列表
const getcollect = (data) => {
	return request({
		url: "/mobile/user_fava",
		method: "GET",
		data
	})
}
//获取专栏接口
const getcolumn = (data) => {
	return request({
		url: "/mobile/column/read",
		method: "GET",
		data
	})
}
//获取取消收藏列表数据
const getcollecOut = (data) => {
	return request({
		url: "/mobile/uncollect",
		method: "POST",
		data
	})
}
//获取秒杀列表数据
const getflashsale = (data) => {
	return request({
		url: "/mobile/flashsale",
		method: "GET",
		data
	})
}
export default {
	getCarterGroup,
	getCartercollect,
	getcollect,
	getcolumn,
	getcollecOut,
	getflashsale
}
