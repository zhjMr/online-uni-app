<template>
	<view class="from_box">
		<view v-for="(item,index) in userLogi" :key="index">
			<!-- 登录 -->
			<view class="inputFrom1" v-if="item.type=='text'|| item.type=='password' && item.show">
				<uni-icons class="icon" :type="item.icon" size="24"></uni-icons>
				<input type="text" v-model="value[item.prop]" :placeholder="item.placeholder">
				<button v-if="item.prop=='code'" class="code"
					@click="handleClickSend">{{codeDuration ? codeDuration + 's' : '发送'}}</button>
			</view>
			<!-- 	<view class="inputFrom2">
				<uni-icons class="icon" type="locked" size="24"></uni-icons>
				<input type="text" placeholder="请输入密码" v-model="loginform.password">
			</view>
			<view class="inputFrom2">
				<uni-icons class="icon" type="locked" size="24"></uni-icons>
				<input type="text" placeholder="请确认输入的密码" v-model="loginform.repassword">
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: Object,
				default: () => {}
			},
			userLogi: {
				type: Array,
				default: () => []
			},
			codeDuration: {
				type: Number,
				default: 60
			},
			interval: {
				type: Number,
				default: 60
			}
		},
		data() {
			return {

			}
		},
		methods: {
			handleClickSend() {
				this.$emit('handleClickSend')
			}
		},
		onLoad() {

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

	.code {
		width: 300rpx;
		border: none;
		color: #fff;
		height: 100%;
		background-color: #5ccc84;
	}
</style>
