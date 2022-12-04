<template>
	<view>
		<view class="login-bg"></view>
		<view class="loginFrom">
			<view class="loginInfo">找回密码</view>
			<!-- 找回密码-->
			<loginfrom @handleClickSend="handleClickSend" :codeDuration="codeDuration" :interval="interval"
				:userLogi="userLogin" v-model="from"></loginfrom>

			<button class="bttonLogin" @click="handleFind">立即找回</button>
		</view>
	</view>
</template>

<script>
	//引入登录表单组件
	import loginfrom from "@/pages/auth/components/loginfrom.vue"
	//引入api
	import loginApi from "@/api/login.js"
	export default {
		components: {
			loginfrom
		},
		data() {
			return {
				codeDuration: null,
				interval: null,
				from: {
					phone: "",
					code: "",
					password: "",
					repassword: "",
				},
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

					}, {
						type: "password",
						icon: "locked",
						placeholder: "请输入密码",
						prop: "password",
						show: true
					},
					{
						type: "password",
						icon: "locked",
						placeholder: "请确认密码",
						prop: "repassword",
						show: true
					},
				]
			}
		},
		methods: {
			//立即找回触发的事件
			async handleFind() {
				try {
					uni.showLoading({
						mask: true
					})
					const responst = await loginApi.getforget(this.from)
					console.log(responst);
					uni.hideLoading()
					if (responst.data.msg == "ok") {
						//找回成功跳转登录页
						this.$util.msg('找回成功')

						this.navTo("/pages/auth/login")
					} else {
						this.$util.msg(responst.data.data)
					}
				} catch (e) {
					console.log(e);
					uni.hideLoading()
					//TODO handle the exception
				}
			},
			//发送验证码触发的方法
			async handleClickSend() {
				// console.log('发送验证码');
				try {
					uni.showLoading({
						mask: true
					})
					const response = await loginApi.getChangeCode(this.from)
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
		},
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
