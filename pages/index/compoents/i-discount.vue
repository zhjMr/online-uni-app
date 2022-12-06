<template>
	<view>
		<view class="discount">
			<view class="discountList" v-for="(item,index) in discountsList" :key="index">

				<view class="left">
					<view class="price">
						{{item.price}}
					</view>
					<view class="text">
						适用专栏：{{item.value.title}}
					</view>
				</view>

				<view class="right">
					领取
				</view>
			</view>

		</view>
		<view class="eee">

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			discountsList: {
				type: Array,
				default: () => ([])
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	.discount {
		display: flex;
		overflow-y: hidden;
		margin-top: 30rpx;
        margin-bottom: 20rpx;
		.discountList {
			margin-left: 20rpx;
			display: flex;
			width: 600rpx;
			height: 120rpx;
			background-color: #d39e00;
			color: #fff;

			.left {
				width: 470rpx;
				height: 100%;
				border-right: 4rpx dashed #fff;
				text-align: center;

				.price {
					margin-top: 20rpx;
				}

				.text {
					color: #fff;
					font-size: 16rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}
			}

			.right {
				width: 140rpx;
				height: 100%;
				line-height: 120rpx;
				text-align: center;
				color: #fff;
				background-color: #fec107;
			}
		}
	}

	.eee {
		width: 100%;
		height: 15rpx;
		background-color: #eee;
	}
</style>
