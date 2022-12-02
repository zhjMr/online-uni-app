// 引入http请求文件
import request from "@/utils/request.js"

const getUserLogin = (data) => {
	return request({
		url: "/mobile/login",
		method: 'POST',
		data
	})
}

export default {
	getUserLogin
}
