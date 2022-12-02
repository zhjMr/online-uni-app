<template>
	<view>
		<view class="login-bg"></view>
		<view class="loginFrom">
			<view class="loginInfo">
				登录
			</view>
			<view class="inputFrom1">
			
				<input type="text"><input type="text" placeholder="请输入用户名">
			</view>
			<view class="inputFrom2 ">
			
				<input type="text"><input type="text" placeholder="请输入密码">
			</view>

		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

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
</style>
