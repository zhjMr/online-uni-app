<template>
	<view>
		<view class="login-bg"></view>
		<view class="loginFrom">
			<!-- 登录 -->
			<loginfrom ></loginfrom>
			<!-- 微信 -->
			<view class="wxmap">
				<view class="WxappImg">
					<uni-icons class="green" type="weixin" size="40"></uni-icons>
				</view>
			</view>

			<view class="useragreement">
				<label>
					<checkbox value="agreement" color="#5ccc84" /><text>已阅读并同意用户协议隐私声明</text>
				</label>
			</view>
		</view>
	</view>

</template>

<script>
	//引入登录表单组件
	import loginfrom from "@/pages/auth/components/loginfrom.vue"
	export default {
		components: {
			loginfrom
		},
		data() {
			return {
				agreement: false,
				loginInfo: null
			}
		},
		onLoad() {

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
</style>
