// 引入http请求文件
import request from "@/utils/request.js"

const getUserList = () => {
	return request({
		url: '/xx',
		method: 'GET'
	})
}

export default {
	getUserList
}
