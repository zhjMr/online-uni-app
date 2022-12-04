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
			//用户没有绑定手机号就跳转到绑定手机号页面
			if (!this.$store.state.userInfo.phone && options.login) {
				uni.navigateTo({
					url: "/pages/bind-phone/bind-phone"
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
