import request from "@/utils/request.js"

/// 获取学习进度
const getStatus = (data) => {
	return request({
		url: "/mobile/user_history/list",
		method: "GET",
		data
	})
}

export default {
	getStatus,
}
