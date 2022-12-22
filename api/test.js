import request from "@/utils/request.js"

const getTestList = (data) => {
	return request({
		url: "/mobile/testpaper/read",
		data
	})
}


export default {
	getTestList
}
