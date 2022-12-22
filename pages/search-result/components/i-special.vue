<template>
	<view class="i-clurse">
		<view class="courseList" v-for="(item,index) in columnList" :key="index" @click="handleclickdeail(item)">
			<view class="iamg">
				<image :src="item.cover" mode=""></image>
				<view class="autoView">{{item.type|formatType}}</view>
			</view>
			<view class="texte">
				<view class="title">
					{{item.title}}
				</view>

				<view v-if="item.progress>=0">
					<view class="font-sm text-muted my-3" >学习进度</view>
					<view class="font-sm">
						<text class="text-danger mr-1" v-if="index==0">最近学习</text>
						<text class="text-muted">已学习 {{item.progress}}%</text>
					</view>
				</view>

				<view class="sprice">
					<text v-if="item.price==0">免费</text>
					<text v-if="item.price>0">￥{{item.price}}</text>
					<text v-if="item.t_price">￥{{item.t_price}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			columnList: {
				type: Array,
				default: () => ([])
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
			//点击专栏列表触发事件
			handleclickdeail(item) {
				//点击跳转专栏详情页面
				this.navTo(`/pages/column/column?id=${item.id}`)
			}
		}
	}
</script>

<style lang="scss">
	.text-danger{
		font-size: 16rpx !important;
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

	.title {

		width: 300rpx;
		overflow: hidden; //超出隐藏
		white-space: nowrap; //不折行
		text-overflow: ellipsis; //溢出显示省略号


	}
 .text-muted{
	 font-size: 16rpx !important;
	 color: #666 !important;
 }
	.i-clurse {
		.courseList {
			margin-top: 40rpx;
			display: flex;
			padding: 0 20rpx;

			.iamg {
				position: relative;
				width: 300rpx;
				height: 170rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.texte {
				margin-left: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				text:nth-child(1) {
					font-size: 40rpx;
					color: #e3606c;
					width: 100px;
					overflow: hidden; //超出隐藏
					white-space: nowrap; //不折行
					text-overflow: ellipsis; //溢出显示省略号

				}
				text:nth-child(2) {
					font-size: 20rpx;
					color: #666;
				}
			}
		}
	}
</style>
