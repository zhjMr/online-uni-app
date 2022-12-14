import request from "@/utils/request.js"
//获取专栏列表数据
const getColum = (data) => {
	return request({
		url: "/mobile/column/list",
		method: "GET",
		data
	})
}
//获取直播列表数据
const getliver = (data) => {
	return request({
		url: "/mobile/live/list",
		method: "GET",
		data
	})
}
//获取电子数据列表数据
const getbooke = (data) => {
	return request({
		url: "/mobile/book/list",
		method: "GET",
		data
	})
}
export default {
	getColum,
	getliver,
	getbooke
}