import request from "@/utils/request.js"
const bookDetail = (data) => {
	return request({
		url: "/mobile/book/read",
		method: "GET",
		data
	})
}
export default {
	bookDetail
}
