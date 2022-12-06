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
//获取拼团接口板数据
const getgroup = () => {
	return request({
		url: "/mobile/group",
		method: "GET"
	})
}
export default {
	getBannerList,
	getdiscount,
	getgroup
}
