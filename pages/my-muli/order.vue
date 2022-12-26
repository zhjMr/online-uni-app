<template>
	<view>
		<view class="order-box" v-for="(item,index) in orderList" :key="index">
			<view class="order-list">
				<view>订单时间：{{item.created_time}}</view>
				<view>订单号：{{item.no}}</view>
			</view>
			<view class="title-dian">
				<view class="wx-zf">
					{{item.goods}}
				</view>
				<view class="price-text">
					￥{{item.total_price}}
				</view>
			</view>
			<view class="succers" v-if="item.status=='success'">
				交易成功
			</view>
			<view class="diager" v-else>
				等待支付
			</view>
		</view>
		<uni-load-more :status="moreStatus"></uni-load-more>
	</view>
</template>

<script>
	//引入api
	import OrderApi from "@/api/order.js"
	export default {
		data() {
			return {
				data: {
					page: 1,
					limit: 5
				},
				orderList: [], //订单数据
				moreStatus: "loading"
			}
		},
		onLoad() {
			this.getOrder()
		},
		//下拉刷新
		onPullDownRefresh() {
			this.data.page = 1
			this.getOrder()
		},
		//上拉加载的方法
		onReachBottom() {
			if (this.moreStatus !== "more") {
				return
			}
			// console.log(1232);
			this.data.page += 1
			this.getOrder()
		},
		methods: {
			//获取订单列表数据
			async getOrder() {
				try {
					const responst = await OrderApi.getorderList(this.data)
					console.log(responst, '订单列表');
					this.orderList = this.data.page == 1 ? responst.data.data.rows : this.orderList.concat(responst.data.data.rows)
					this.moreStatus = responst.data.data.rows.length < 5 ? "noMore" : "more"
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				} finally {
					uni.stopPullDownRefresh()
				}
			}
		}
	}
</script>

<style lang="scss">
	.order-box {

		width: 100%;
		height: 325rpx;
		border-bottom: 20rpx solid #eee;

		.order-list {
			font-size: 16rpx;
			color: #787f88;
			display: flex;

			view {
				padding: 20rpx;
			}
		}
	}

	.title-dian {
		height: 130rpx;
		padding: 0 20rpx;
		border-bottom: 1rpx solid #eee;
		display: flex;
		justify-content: space-between;

		.price-text {
			color: #dc3546;
			font-weight: bold;
			line-height: 130rpx;
		}
	}

	.succers {
		padding: 0 20rpx;
		color: #35dc54;
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
	}

	.diager {
		padding: 0 20rpx;
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
	}
</style>
