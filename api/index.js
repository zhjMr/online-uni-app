import request from "@/utils/request.js"
//获取首页数据
const getBannerList = () => {
	return request({
		url: "/mobile/index",
		method: "GET"
	})
}
//获取优惠券接口数据
const getdiscount = () => {
	return request({
		url: "/mobile/coupon",
		method: "GET"
	})
}
//获取拼团接口数据
const getgroup = (data) => {
	return request({
		url: "/mobile/group",
		method: "GET",
		data
	})
}
//领取优惠卷接口数据
const getDown = (data) => {
	return request({
		url: "/mobile/user_coupon/receive",
		method: "POST",
		data
	})
}
//优惠卷页面接口
const discounts = (data) => {
	return request({
		url: '/mobile/user_coupon',
		method: "GET",
		data
	})
}
export default {
	getBannerList,
	getdiscount,
	getgroup,
	getDown,
	discounts
}
