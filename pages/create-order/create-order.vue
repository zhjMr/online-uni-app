<template>
	<view>

		<view class="group">
			<view class="grouplist">
				<view class="images">
					<image src="../../static/demo/cover/1.png" mode=""></image>
				</view>
				<view class="right-title">
					<view class="text">
						海骏达三大件大家按时间段多看看
					</view>
					<view class="price">
						<text>￥9.98</text>
					</view>
				</view>
			</view>
		</view>
		<view class="card"  hover-class="active">
			<text>优惠卷</text>
			<view class="noData" >
				<text>暂无可用</text>
				<uni-icons type="forward" size="20" color="#ccc"></uni-icons>
			</view>

		</view>
		<view class="card">
			<text>支付方式</text>
			<view class="noData">
				<text style="color: #5ccc84;">微信支付</text>
			</view>
		
		</view>
		<view class="buttonBottom">
			<button >立即购买￥9.98</button>
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
	.group {
		width: 100%;
		border-bottom: 14rpx solid #eee;

		.grouplist {
			display: flex;
			width: 100%;
			height: 230rpx;
			margin-left: 20rpx;

			.images {
				margin-right: 20rpx;
				width: 343rpx;
				height: 192rpx;

				image {
					width: 343rpx;
					height: 192rpx;

				}
			}

			.text {
				font-size: 36rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}

			.price {
				text:nth-child(1) {
					color: #d96e78;
				}
			}
		}
	}

	.right-title {
		width: 360rpx;
		height: 192rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30rpx;
		border-bottom: 1rpx solid #eee;
	}
	.active{
		background-color: #eee !important;
	}
	.buttonBottom {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #fff;
		padding: 30rpx;
		border-top: 1rpx solid #eee;
	
		button {
			background-color: #5ccc84;
			color: #fff;
		}
	
	}
</style>
