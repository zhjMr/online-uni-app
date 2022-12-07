<template>
	<view>
		<view class="discount">
			<view class="discountList" v-for="(item,index) in discountsList" :key="index">
				<view class="left">
					<view class="price">
						￥{{item.price}}
					</view>
					<view class="text">
						适用专栏：{{item.title}}
					</view>
				</view>

				<view class="right" hover-class="active">
					立即使用
				</view>
			</view>
		</view>
		<view class="title">
			没有更多数据了
		</view>
	</view>
</template>

<script>
	//引入优惠卷api
	import indexApi from "@/api/index.js"
	//引入优惠卷页面组件
	import discountsMap from "@/pages/index/compoents/i-discount.vue"
	export default {
		components: {
			discountsMap
		},
		data() {
			return {
				page: '1',
				limit: '10',
				discountsList: [] //优惠卷列表数据
			}
		},
		onLoad() {
			//调用优惠卷数据
			this.getDiscountsList()
		},
		// 下拉刷新
		onPullDownRefresh() {
			uni.stopPullDownRefresh(); //停止刷新
		},
		methods: {
			//获取优惠卷数据
			async getDiscountsList() {
				try {
					let {
						page,
						limit
					} = this
					const response = await indexApi.discounts(page, limit)
					console.log(response, '成功');
					this.discountsList = response.data.data.rows
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
		}
	}
</script>

<style lang="scss">
	.discount {
		overflow: hidden;

		.discountList {
			margin: auto;
			display: flex;
			margin-top: 30rpx;
			width: 94%;
			height: 120rpx;
			background-color: #d39e00;
			color: #fff;

			.left {
				width: 70%;
				height: 100%;
				border-right: 4rpx dashed #fff;

				.price {
					margin-left: 10rpx;
					margin-top: 20rpx;
					font-size: 40rpx;
				}

				.text {
					margin-left: 10rpx;
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
				width: 34%;
				height: 100%;
				line-height: 120rpx;
				text-align: center;
				color: #fff;
				background-color: #fec107;
			}
		}
	}

	.active {
		background-color: #d39e00 !important;
	}

	.title {
		width: 100%;
		height: 150rpx;
		line-height: 150rpx;
		text-align: center;
		font-size: 30rpx;
		color: #666;

	}
</style>
