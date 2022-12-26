import request from "@/utils/request.js"
const bookDetail = (data) => {
	return request({
		url: "/mobile/book/read",
		method: "GET",
		data
	})
}
//我的电子书
const getbooks = (data) => {
	return request({
		url: "/mobile/mybook",
		method: 'GET',
		data
	})
}
export default {
	bookDetail,
	getbooks
}
