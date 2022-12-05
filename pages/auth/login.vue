<template>
	<view>
		<view class="login-bg"></view>
		<view class="loginFrom">
			<!-- 登录 -->
			<view class="loginInfo">{{show ? '注册' : '登录'}}</view>

			<loginfrom :userLogi="userLogin" v-model="from"></loginfrom>

			<button class="bttonLogin" @click="getUserLoginList">{{show ? '注册' : '登录'}}</button>
			<!-- 注册 -->
			<view class="inputFrom3">
				<text @click="handleregister" class="masterdd">
					{{show ? "去登录" : "注册账号"}}
				</text>
				<text @click="handleforgetPassword">忘记密码？</text>
			</view>
			<!-- 微信 -->
			<view class="wxmap">
				<view class="WxappImg">
					<uni-icons class="green" type="weixin" size="40"></uni-icons>
				</view>
			</view>
			<!-- 用户隐私声明 -->
			<view class="useragreement" v-if="!show">
				<checkbox-group @change="handelChange">
					<label>
						<checkbox :checked="agreement" color="#5ccc84" />
						<text>已阅读并同意用户协议&隐私声明</text>
					</label>
				</checkbox-group>
			</view>
		</view>
	</view>

</template>

<script>
	//引入登录表单组件
	import loginfrom from "@/pages/auth/components/loginfrom.vue"
	import LoginUserApi from "@/api/login.js"
	export default {
		components: {
			loginfrom
		},
		data() {
			return {
				agreement: false, //用户隐私协议
				show: false, //状态
				from: {
					username: "",
					password: "",
					repassword: "",
				},
				userLogin: [{
					type: "text",
					icon: "person",
					placeholder: "请输入用户名",
					prop: "username",
					show: true
				}, {
					type: "password",
					icon: "locked",
					placeholder: "请输入密码",
					prop: "password",
					show: true

				}, {
					type: "password",
					icon: "locked",
					placeholder: "请输入确认密码",
					prop: "repassword",
					show: false
				}, ]
			}
		},
		onLoad() {

		},
		methods: {
			//找回密码触发的事件
			handleforgetPassword() {
				this.navTo("/pages/forget/forget")
			},
			//去登录注册触发的事件
			handleregister() {
				this.userLogin.forEach(item => {
					if (item.prop == 'repassword') {
						item.show = !item.show
						this.show = item.show
					}
				})
			},
			//点击用户登录
			async loginfrom() {
				try {
					uni.showLoading({
						mask: false
					});

					// 隐私协议
					if (!this.agreement) {
						this.$util.msg('请阅读并同意用户协议&隐私声明')
						return
					}

					const response = await LoginUserApi.getUserLogin(this.from)
					console.log(response);
					uni.hideLoading()

					if (response.data.msg == "ok") {
						// console.log(response.data.data.phone);
						this.$util.msg('登录成功')
						//登录成功清除输入框内容
						this.from = {}
						//把用户的信息保存到vuex
						this.$store.commit('setToken', response.data.data)
						//登录成功判断用户是否输入了手机号
						if (response.data.data.phone) {
							//绑定手机号跳转我的页面
							uni.switchTab({
								url: "/pages/my/my"
							})
						} else {
							//没有跳转绑定手机号页面
							this.navTo("/pages/bind-phone/bind-phone")

						}
					} else {
						//请求数据进行提示
						this.$util.msg(response.data.data)
					}

				} catch (e) {
					uni.hideLoading()
					console.log(e);
					//TODO handle the exception
				}
			},

			//点击用户注册
			async registered() {
				try {
					uni.showLoading({
						mask: false
					});
					const response = await LoginUserApi.getUserSing(this.from)
					console.log(response);
					uni.hideLoading()

					if (response.data.msg == "ok") {

						this.$util.msg('注册成功')
						//注册成功清除输入框内容
						this.from = {}
						//注册成功回到登录
						this.handleregister()
					} else {
						//请求数据进行提示
						this.$util.msg(response.data.data)
					}
				} catch (e) {
					uni.hideLoading()
					console.log(e);
					//TODO handle the exception
				}
			},

			// 判断用户点击登录还是注册
			getUserLoginList() {
				if (this.show) {
					// 注册方法
					this.registered()
				} else {
					//登录方法
					this.loginfrom()
				}
			},
			//注册账号，去登录触发的方法
			loginStatus(data) {
				// console.log(data);
				this.loginInfo = data
			},
			//隐私声明勾选触发的事件
			handelChange() {
				//点击进行状态切换
				this.agreement = !this.agreement
				// console.log(this.agreement);
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

		.loginInfo {
			font-size: 46rpx;
			padding-top: 54rpx;
			padding-left: 72rpx;

		}
	}

	.loginInfo {
		font-size: 46rpx;
		padding-top: 54rpx;
		padding-left: 72rpx;

	}

	.wxmap {
		width: 100%;
		height: 102rpx;

		.WxappImg {
			margin: auto;
			width: 102rpx;
			height: 102rpx;
			border: 1rpx solid #3cba68;

			border-radius: 50rpx;
			line-height: 102rpx;
			text-align: center;
		}

	}

	.green {
		color: #3cba68 !important;
	}

	.useragreement {

		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #9d9a94;
	}

	.inputFrom3 {
		margin: auto;
		display: flex;
		align-items: center;
		width: 618rpx;
		height: 150rpx;
		color: #9d9a94;
		// background-color: pink;
		justify-content: space-between;

		.masterdd {
			color: #7beaa2;
		}
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
