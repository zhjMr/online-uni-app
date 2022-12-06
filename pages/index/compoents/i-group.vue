<template>
	<view>
		<view class="title">
			拼团
		</view>

		<view class="group">

			<view class="grouplist" v-for="(item,index) in groupList" :key="index">
				<view class="images">
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="text">
					{{item.title}}
				</view>
				<view class="price">
					<text>￥{{item.price}}</text>
					<text>￥{{item.t_price}}</text>
				</view>
			</view>
		</view>
			<view class="eee"></view>
	</view>
</template>

<script>
	export default {
		props: {
			groupList: {
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
	.group {
		margin-top: 10rpx;
		display: flex;
		overflow-y:hidden;

		.grouplist {
			width: 343rpx;
			height: 320rpx;
			// background-color: pink;
			margin-left: 20rpx;

			.images {
				width: 343rpx;
				height: 192rpx;

				image {
					width: 100%;
					height: 100%;
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

	.title {
		padding: 20rpx;
		font-size: 34rpx;
		font-weight: bold;
	}
	.eee{
		height: 15rpx;
		width: 100%;
		background-color: #eee;
	}
</style>
