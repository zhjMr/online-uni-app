<template>
	<view>
		<optioUser :navData="navData" v-model="from"></optioUser>
		<button class="buttons" @click="handleSave">保存</button>
	</view>
</template>

<script>
	//引入目录组件
	import optioUser from "@/pages/my/components/options.vue"
	//引入修改密码模拟数据
	import changePass from "@/config/my/ChangePassword.js"
	//引入api
	import userApi from "@/api/login.js"
	export default {
		props: {
			navData: {
				type: Array,
				default: changePass
			}
		},
		components: {
			optioUser
		},
		data() {
			return {
				from: {
					opassword: '',
					password: "",
					repassword: "",
				}
			}
		},
		methods: {
			//修改密码点击保存触发的事件
			async handleSave() {
				try {
					uni.showLoading({
						mask: true
					})
					const response = await userApi.getUpdataPass(this.from)
					console.log(response);
					uni.hideLoading()
					//数据请求成功
					if (response.data.msg == 'ok') {
						//修改密码成功
						this.$util.msg('修改密码成功')
						//清除本地数据
						this.$store.commit('logout')
						//跳转我的页面
						uni.switchTab({
							url: "/pages/my/my"
						})
					} else {
						//用户操作错误给用户进行提示
						this.$util.msg(response.data.data)
					}
				} catch (e) {
					console.log(e);
					uni.hideLoading()
				}
			}
		}
	}
</script>

<style lang="scss">
	.buttons {
		width: 696rpx;
		height: 89rpx;
		margin: auto;
		line-height: 89rpx;
		text-align: center;
		background-color: #5ccc84;
		color: #fff;
		margin-top: 20rpx;
	}
</style>
