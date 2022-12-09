import request from "@/utils/request.js"
//获取搜索接口数据
const getSearchInput = (data) => {
	return request({
		url: "/mobile/search",
		method: "GET",
		data
	})
}
export default {
	getSearchInput
}
