import config from '@/config/index.js'
const request = (options) => {

	const appid = "bd9d01ecc75dbbaaefce"

	return new Promise((resolve, reject) => {
		uni.request({
			url: config.baseUrl + options.url,
			method: options.method || "GET",
			header: {
				appid,
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
