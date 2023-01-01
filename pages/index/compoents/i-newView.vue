<template>
	<view>
		<view class="title">
			<text>最新列表</text>
			<text @click="handleChangeView">查看更多</text>
		</view>
		<view class="group">
			<view class="grouplist" v-for="(item,index) in NewList" :key="index" @click="handleChangeNew(item)">
				<view class="images">
					<view class="autoView">{{item.type|formatType}}</view>
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="right-title">
					<view class="text">
						{{item.title}}
					</view>
					<view class="price">
						<text v-if="item.price === 0">免费</text>
						<text v-else-if="item.price > 0">￥{{item.price}}</text>
						<text v-if="item.t_price">￥{{item.t_price}}</text>
					</view>
				</view>

			</view>
		</view>
		<image :src="imageList" mode="aspectFill"></image>
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
				default: ""
			}
		},
		data() {
			return {

			}
		},
		filters: {
			formatType(value) {
				let type = {
					media: '图文',
					audio: '音频',
					video: '视频',
					column: '专栏'
				}

				return type[value]
			}
		},
		methods: {
			//点击查看更多触发的方法
			handleChangeView(){
				this.navTo('/pages/curriculums/curriculums')
			},
			//点击最新列表触发的事件
			handleChangeNew(item) {
				if (!item.type) {
					this.navTo(`/pages/column/column?id=${item.id}`)
				} else {
					this.navTo(`/pages/course/course?id=${item.id}`)
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
