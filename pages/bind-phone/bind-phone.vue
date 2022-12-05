<template>
	<view>
		<view class="login-bg"></view>
		<view class="loginFrom">
			<view class="loginInfo">绑定手机号</view>
			<!-- 绑定手机号-->
			<loginfrom :codeDuration="codeDuration" :interval="interval" @handleClickSend="handleClickSend"
				:userLogi="userLogin" v-model="from"></loginfrom>

			<button class="bttonLogin" @click="handleClickBound">绑定</button>
		</view>
	</view>
</template>

<script>
	//引入登录表单组件
	import loginfrom from "@/pages/auth/components/loginfrom.vue"
	//引入api 
	import loginUserpi from "@/api/login.js"
	//引入用户信息 
	import {
		mapState
	} from "vuex"
	export default {
		components: {
			loginfrom
		},
		data() {
			return {
				from: {
					phone: "",
					code: "",
				},
				codeDuration: null,
				interval: null,
				userLogin: [{
					type: "text",
					icon: "person",
					placeholder: "请输入手机号",
					prop: "phone",
					show: true
				}, {
					type: "password",
					icon: "locked",
					placeholder: "验证码",
					prop: "code",
					show: true

				}]
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			//绑定手机号触发的事件
			async handleClickBound() {
				// console.log('绑定手机号');
				//开启loading加载
				uni.showLoading({
					mask: true
				})
				try {
					const response = await loginUserpi.getBindPhone(this.from)
					console.log(response);
					if (response.data.msg == "ok") {
						uni.hideLoading()
						this.$util.msg('绑定成功')

						this.userInfo.phone = this.from.phone
						uni.setStorageSync("userInfo", this.userInfo)
						//绑定成功清除输入框内容
						this.from = {}
						//绑定成功跳转我的页面
						uni.switchTab({
							url: "/pages/my/my"
						})
					} else {
						//请求数据进行提示
						this.$util.msg(response.data.data)
					}
				} catch (e) {
					console.log(e);
					uni.hideLoading()
					//TODO handle the exception
				}
			},
			// 发送验证码触发的事件
			async handleClickSend() {
				// console.log('发送验证码');
				try {
					uni.showLoading({
						mask: true
					})
					const response = await loginUserpi.getChangeCode(this.from)
					// console.log(response);
					console.log(response);

					uni.hideLoading()

					this.$util.msg(response.data.data)
					if (response.data.msg == "ok") {
						//提示框提示内容必须为字符串
						this.$util.msg("验证码为:" + response.data.data)
						this.codeDuration = 60
						this.interval = setInterval(() => {
							this.codeDuration--
							if (this.codeDuration <= 0) {
								if (this.interval) {
									clearInterval(this.interval)
									this.interval = null
									this.disabled = false
								}
							}
						}, 1000)
					}
				} catch (e) {
					console.log(e);
					uni.hideLoading()
					this.$util.msg("验证码发送失败")
					//TODO handle the exception
				}
			},

		}
	}
</script>

<style lang="scss">
	.loginFrom {
		width: 100%;
		height: 900rpx;
		background-color: #fff;
		border-radius: 50rpx;
		position: absolute;
		top: 180rpx;
	}

	.loginInfo {
		font-size: 46rpx;
		padding-top: 54rpx;
		padding-left: 72rpx;

	}

	.bttonLogin {
		width: 618rpx;
		height: 102rpx;
		background-color: #5ccc84;
		border: 0;
		color: #f5f5f5;
		margin-top: 50rpx;
	}
</style>
