import request from "@/utils/request.js"

const getorderList = (data) => {
	return request({
		url: "/mobile/order/list",
		method: 'GET',
		data
	})
}
export default {
	getorderList
}
