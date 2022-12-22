import request from "@/utils/request.js"

const testpaper = (data) => {
	return request({
		url: "/mobile/testpaper/list",
		data
	})
}
// /交卷
const getHandInAnExamination = (data) => {
	return request({
		url: '/mobile/user_test/save',
		method: "post",
		data,
	})
}
// 我的考试记录 
// /mobile/user_test/list?page=1&limit=5
const getUserTest = (data) => {
	return request({
		url: '/mobile/user_test/list',
		data,
	})
}

export default {
	testpaper,
	getHandInAnExamination,
	getUserTest
}
