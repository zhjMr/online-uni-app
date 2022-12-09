import request from "@/utils/request.js"
//获取搜索接口数据
const getSearchInput = (data) => {
	return request({
		url: "/mobile/search",
		method: "GET",
		data
	})
}
//获取详情接口数据
const getcourse = (data) => {
	return request({
		url: "/mobile/course/read",
		method: "GET",
		data
	})
}
//获取拼团详情接口数据
const getgroup = (data) => {
	return request({
		url: "/mobile/group_work/list",
		method: "GET",
		data
	})
}
export default {
	getSearchInput,
	getcourse,
	getgroup
}
