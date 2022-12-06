<template>
	<view>
		<view class="title">
			<text>最新列表</text>
			<text>查看更多</text>
		</view>

		<view class="group">
			<view class="grouplist" v-for="(item,index) in NewList" :key="index">
				<view class="images">
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="right-title">
					<view class="text">
						{{item.title}}
					</view>
					<view class="price">
						<text>￥{{item.price}}</text>
						<text>￥{{item.t_price}}</text>
					</view>
				</view>

			</view>
		</view>
		<image :src="imageList" ></image>
	</view>
</template>

<script>
	export default {
		props: {
			NewList: {
				type: Array,
				default: () => ([])
			},
			imageList: {
				type: String,
				default:""
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	.group {
		margin-top: 20rpx;
		width: 100%;

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

				text:nth-child(2) {
					font-size: 16rpx;
					color: #666;
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

	.title {
		padding: 30rpx 20rpx;
		font-size: 34rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: space-between;

		text:nth-child(2) {
			color: #666;
			font-size: 16rpx;
		}
	}

	image {
		width: 100%;
		height: 300rpx;
	}
</style>
