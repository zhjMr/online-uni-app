export default {
	data() {
		return {

		}
	},

	methods: {
		// 跳转 
		navTo(url, options = {}) {
			if (!url) return
			if (options.login && !this.$store.getters.hasLogin) {
				uni.navigateTo({
					url: "/pages/auth/login"
				})
				return
			}

			uni.navigateTo({
				url
			})
		},

		// 返回上一级
		navBack(delta = 1) {
			uni.navigateBack({
				delta
			})
		},

	
	}
}
