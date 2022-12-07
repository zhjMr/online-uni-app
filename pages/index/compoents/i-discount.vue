<template>
	<view>
		<view class="discount">
			<view class="discountList" v-for="(item,index) in discountsList" :key="index"
				:class="[item.isgetcoupon ? 'active' : 'activeClass']">
				<view class="left">
					<view class="price">
						{{item.price}}
					</view>
					<view class="text">
						适用专栏：{{item.value.title}}
					</view>
				</view>

				<view class="right" @click="handleDown(item)" :class="[item.isgetcoupon ? 'active' : 'activeClass']">
					{{handleDown ? '领取' : "已领取" }}
				</view>
			</view>
		</view>
		<view class="eee">

		</view>
	</view>
</template>

<script>
	//引入api
	import IndexApi from "@/api/index.js"
	export default {
		props: {
			discountsList: {
				type: Array,
				default: () => ([])
			}
		},
		data() {
			return {
				coupon_id: 18,
			}
		},
		methods: {
			//调用领取优惠卷接口数据
			async handleDown(item) {
				try {
					//用户进行提示
					if (item.isgetcoupon) {
						// item.isgetcoupon = false
						this.$util.msg("你已经领取过了")
						return
					}
					//开启loading
					uni.showLoading({
						mask: true
					})
					let {
						coupon_id
					} = this
					const response = await IndexApi.getDown({
						coupon_id
					})
					uni.hideLoading()
					//请求成功关闭loading
					console.log(response, '领取优惠卷');
					this.coupon_id = item.id
					if (response.data.msg == 'ok') {
						//请求成功关闭loading
						this.$util.msg('领取成功')
						item.isgetcoupon = true
					}
				} catch (e) {
					console.log(e);
					uni.hideLoading()
					//TODO handle the exception
				}
			},
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

	.activeClass {
		background-color: #fec107 !important;
	}

	.active {
		background-color: #dae0e5 !important;
	}
</style>
