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
//电子书目录详情
const getbookList = (data = {}) => {
	return request({
		url: "/mobile/book/detail",
		method: 'GET',
		data
	})
}
// 公告列表
const getMessageList = (data = {}) => {
	return request({
		url: '/mobile/notice/list',
		method: 'GET',
		data
	})
}
export default {
	bookDetail,
	getbooks,
	getbookList,
	getMessageList
}
