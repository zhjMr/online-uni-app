<template>
	<view class="myuserBox" @click="handleChangeOk">
		<view class="topImg">
			<image src="../../../static/noLogin.png" mode=""></image>
		</view>

		<view class="text-user" v-if="hasLogin" >
			<view class="viewLog">
				<text class="mastafter"> {{userInfo.username}}</text>
				<text class="perpetual">永久会员</text>
			</view>
			<view>暂无描述</view>
		</view>


		<view class="text-user" v-else>
			<view class="viewLog">
				<text class="mastafter" @click="handleLoginOf">立即登录</text>
				<text class="perpetual"></text>
			</view>
			<view>暂无描述</view>
		</view>



		<text class="iconfont icon-leimupinleifenleileibie text-white" ></text>
	</view>

</template>

<script>
	import {
		mapState,
		mapGetters
	} from "vuex"
	export default {
		data() {
			return {

			}
		},
		computed: {
			//用户信息
			...mapState(['userInfo']),
			//登录状态
			...mapGetters(['hasLogin'])
		},
		methods: {
			//点击立即登录跳转登录
			handleLoginOf() {
				this.navTo("/pages/auth/login")
			},
			//登录点击跳转编辑资料页面事件
			handleChangeOk() {
				this.navTo('/pages/user-info/user-info')
			}
		},

	}
</script>

<style lang="scss">
	.myuserBox {
		position: relative;
		width: 100%;
		height: 200rpx;
		margin-top: 20rpx;
		// background-color: pink;
		display: flex;
		align-items: center;

		.topImg {
			margin-left: 34rpx;
			width: 150rpx;
			height: 150rpx;
			background-color: #fff;
			border-radius: 50%;

			image {
				width: 100%;
				height: 100%;
			}

		}

		.text-user {
			color: #fff;
			margin-left: 36rpx;
			font-size: 16rpx;

			.perpetual {
				line-height: 70rpx;
				color: #e5bf16;
				margin-left: 30rpx;
			}

			.mastafter {
				font-size: 34rpx
			}
		}

		.iconfont {
			position: absolute;
			top: 40%;
			right: 34rpx;
			font-size: 35rpx;
			color: #fff;
		}
	}
</style>
