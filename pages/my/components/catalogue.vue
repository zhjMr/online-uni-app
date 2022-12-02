<template>
	<view class="catalogue_box">
		<view class="order" v-for="(item,index) in orderList" :key="index" @click="handleClickOrder(item)">
			<view :class="item.icon"></view>
			<view class="text_order">{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	//模拟目录订单等数据
	import orderCart from "@/config/my/catalogue.js"
	export default {
		props: {
			orderList: {
				type: Array,
				default: orderCart
			}
		},
		data() {
			return {

			}
		},
		methods: {
			handleClickOrder(data) {
				console.log(data);
				if (data.page) {
					this.navTo(data.page, {
						login: data.isLogin
					})
				}
				//跳转tab页面
				if (data.pages) {
					uni.switchTab({
						url: data.pages
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.catalogue_box {
		position: absolute;
		border-radius: 20rpx;
		left: 30rpx;
		right: 30rpx;
		width: 90%;
		margin: auto;
		height: 170rpx;
		background-color: #fff;
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		box-shadow: 2px 2px 5px #ddd;

		.iconfont {
			font-size: 44rpx;
			color: #febb00;
		}

		.text_order {
			margin-top: 10rpx;
			font-size: 24rpx;
			color: #2a2e36;
		}
	}
</style>
