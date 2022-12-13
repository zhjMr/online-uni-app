<template>
	<view class="group">
		<view class="grouplist" v-for="(item,index) in NewList" :key="index" @click="handleChangeNew(item)">
			<view class="images">
				<view class="autoView" v-if="item.goods.type=='video'">视频</view>
				<view class="autoView" v-if="item.goods.type=='media'">图文</view>
				<view class="autoView" v-if="item.goods.type=='column'">专栏</view>
				<view class="autoView" v-if="item.goods.type=='audio'">音频</view>
				<image :src="item.goods.cover" mode=""></image>
			</view>
			<view class="right-title">
				<view class="text">
					<text>{{item.goods.title}}</text>
				</view>
				<view class="view">{{item.goods.try}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入Api
	import fastGroupApi from "@/api/group.js"
	export default {
		data() {
			return {
				coumlfrom: {
					page: 1,
					limit: 10
				},
				NewList: []

			}
		},
		onLoad() {
			//调用收藏列表数据
			this.getCoolerList()
		},
		methods: {
			handleChangeNew(item) {

			},
			//获取收藏列表数据
			async getCoolerList() {
				try {
					const response = await fastGroupApi.getcollect(this.coumlfrom)
					console.log(response, '收藏列表');
					this.NewList = response.data.data.rows
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
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
				position: relative;
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
		}
	}

	.view {
		font-size: 16rpx;
		color: #666;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.right-title {
		width: 360rpx;
		height: 192rpx;

	}

	.title {
		padding: 30rpx 20rpx;
		font-size: 34rpx;
		font-weight: bold;

		text:nth-child(2) {
			color: #666;
			font-size: 16rpx;
		}
	}

	image {
		width: 100%;
		height: 360rpx;
	}

	.autoView {
		font-size: 16rpx;
		padding: 5rpx;
		background-color: rgba(0, 0, 0, 0.3);
		position: absolute;
		color: #fff;
		bottom: 10rpx;
		z-index: 999;
		right: 10rpx;
	}
</style>
