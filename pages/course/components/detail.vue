<template>
	<view>
		<view class="contents">
			<view class="iamg">
				<image :src="courseList.cover" mode=""></image>
			</view>
			<view class="group1" v-if="group_id">
				<view class="groupTimer1">
					<view class="left1">
						<view class="price1">
							<text>￥8.00</text>
							<text>￥90.00</text>
						</view>
						<view class="ren1">
							2人拼团
						</view>
					</view>

					<view class="right1">
						距结束567天14:49:20
					</view>
				</view>
			</view>
			<view class="right">
				<view class="box">
					<view class="title">
						{{courseList.title}}
					</view>
					<view class="text">
						{{courseList.sub_count}}人学过
					</view>
					<view class="price">
						<text class="boxRed">￥{{courseList.price}}</text>
						<text class="Linhige">￥{{courseList.t_price}}</text>
					</view>
				</view>
				<view class="store">
					<uni-icons type="star" size="30"></uni-icons>
				</view>
			</view>
		</view>
		<view class="special">
			专栏简介
		</view>
		<view class="content" v-html="courseList.try">
		</view>
		<view class="bottom">
		</view>
		<view class="buttonBottom">
			<button @click="handleClickPay">{{group_id ? `立即拼团￥8` :`立即订购${courseList.price}`}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			courseList: {
				type: Object,
				default: () => {}
			},
			group_id: {
				type: String,
				default: ""
			}
		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			//拼团
			handleGroup() {
				console.log('拼团');
			},
			//订购
			handleOrder() {
				let {
					courseList
				} = this
				// console.log('订购');
				this.navTo(`/pages/create-order/create-order?id=${courseList.id}&type=course`)
			},
			//拼团订购触发的事件
			handleClickPay() {
				if (this.group_id) {
					this.handleGroup()
				} else {
					this.handleOrder()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contents {
		border-bottom: 14rpx solid #eee;
	}

	.special {
		padding: 30rpx;
		border-bottom: 1rpx solid #eee;
		margin-bottom: 20rpx;
	}

	.iamg {
		width: 100%;
		height: 422rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.right {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-right: 20rpx;

		.box {

			padding: 0 30rpx;

			.title {
				font-size: 38rpx;
				padding: 20rpx 0;

			}

			.text {
				color: #c3c2bd;
			}

			.price {
				padding: 20rpx 0;

				.boxRed {
					font-size: 40rpx;
					color: #e33443;
				}

				.Linhige {
					font-size: 30rpx;
					color: #c3c2bd;
					text-decoration: line-through;
				}

			}
		}
	}

	.content {
		padding: 0 30rpx;
	}

	::v-deep img {
		margin: auto;
		width: 100% !important;


	}

	.bottom {
		width: 100%;
		height: 200rpx;
		padding: 0 30rpx;
		border-top: 6rpx solid #666;
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

	.group1 {
		.imag1 {
			width: 100%;
			height: 422rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.groupTimer1 {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			height: 170rpx;
			padding: 0 30rpx;
			background-color: #dc3545;
			margin-top: 10rpx;

			.left1 {
				.price1 {
					color: #fff;

					text:nth-child(1) {
						font-size: 40rpx;
					}

					text:nth-child(2) {
						text-decoration: line-through;
					}
				}

				.ren1 {
					width: 140rpx;
					height: 60rpx;
					color: #dc3545;
					border-radius: 4rpx;
					font-size: 30rpx;
					background-color: #fff;
					line-height: 60rpx;
					text-align: center;
					margin: 10rpx 0;
				}
			}

			.right1 {
				margin-right: 70rpx;
				color: #fff;
			}
		}
	}
</style>
