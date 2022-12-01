import config from '@/config/index.js'
const request = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: config.baseUrl + options.url,
			method: options.method || "GET",
			header: {
				...options.header
			},
			data: options.data || {},
			success: (res) => {

				resolve(res)

			},
			fail: (error) => {
				reject(error)
			}
		})
	})
}
export default request
