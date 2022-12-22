import request from "@/utils/request.js"

/// 获取学习进度
const getStatus = (data) => {
	return request({
		url: "/mobile/user_history/list",
		method: "GET",
		data
	})
}
// 设置学习进度
const setStudyUserHistory = (data) => {
	return request({
		url: '/mobile/user_history/update',
		method: 'POST',
		data
	})
}
export default {
	getStatus,
	setStudyUserHistory
}
