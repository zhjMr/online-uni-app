<template>
	<view class="from_box">
		<view class="loginInfo">
			{{loginInfo ? "注册" : "登录"}}
		</view>
		<!-- 登录 -->
		<view class="inputFrom1">
			<uni-icons class="icon" type="person" size="24"></uni-icons>
			<input type="text" placeholder="请输入用户名" v-model="loginform.username">
		</view>
		<view class="inputFrom2">
			<uni-icons class="icon" type="locked" size="24"></uni-icons>
			<input type="text" placeholder="请输入密码" v-model="loginform.password">
		</view>
		<view class="inputFrom2" v-if="loginInfo">
			<uni-icons class="icon" type="locked" size="24"></uni-icons>
			<input type="text" placeholder="请输入确认密码">
		</view>
		<button class="bttonLogin" @click="getUserLoginList">登录</button>
		<!-- 注册 -->
		<view class="inputFrom3">
			<text @click="handleregister" class="masterdd">
				{{loginInfo ? "去登录" : "注册账号"}}
			</text>
			<text>忘记密码？</text>
		</view>

	</view>
</template>

<script>
	import LoginUserApi from "@/api/login.js"
	export default {
		data() {
			return {
				loginInfo: false,
				loginform :{
					username: "",
					password: "",
				}
			}
		},
		onLoad() {
			//调用用户登录接口
			this.getUserLoginList()
		},
		methods: {
			handleregister() {
				this.loginInfo = !this.loginInfo
			},
			//获取用户登录接口
			async getUserLoginList() {
				try {
					const response = await LoginUserApi.getUserLogin(this.loginform)
					console.log(response);
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="scss">
	.from_box {
		.inputFrom1 {
			margin-top: 50rpx !important;
			display: flex;
			align-items: center;
			margin: auto;
			width: 618rpx;
			height: 102rpx;
			background-color: #f5f5f5;
		}

		.uni-input-form,
		.uni-input-input,
		.uni-input-placeholder {
			// text-align: center;
			color: #d8d9df;
		}

		.icon {
			margin: 0 40rpx;
		}

		.inputFrom2 {
			margin-top: 50rpx !important;
			margin: auto;
			display: flex;
			align-items: center;
			width: 618rpx;
			height: 102rpx;
			background-color: #f5f5f5;
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
	}

	.loginInfo {
		font-size: 46rpx;
		padding-top: 54rpx;
		padding-left: 72rpx;

	}
</style>
