<template>
	<view>
		<view class="contents">
			<view class="iamg" v-if="!courseList.isbuy">
				<view class="autoView">{{courseList.type |  formatType}}</view>
				<image :src="courseList.cover ||  '' " mode=""></image>
			</view>
			<!-- 视频播放 -->
			<video v-else-if="courseList.type === 'video'" :src="courseList.content" :poster="courseList.cover" controls
				style="width: 100%; height:420rpx;"></video>

			<!-- 音频播放器 -->
			<i-audio v-else-if="courseList.type === 'audio'" :poster='courseList.cover'></i-audio>
			
			<view class="group1" v-if="group_id && !courseList.isbuy">
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
					<view class="price" v-if="!courseList.isbuy">
						<text class="boxRed">￥{{courseList.price}}</text>
						<text class="Linhige">￥{{courseList.t_price}}</text>
					</view>
				</view>
				<view class="store">
					<uni-icons type="star" size="30" @click="handleCollect">
					</uni-icons>
				</view>
			</view>
		</view>
		<view class="special">
			{{(courseList.isbuy && courseList.type === 'media') ? '课程内容' : '课程简介'}}
		</view>
		<view class="content"
			v-html="(courseList.isbuy && courseList.type === 'media') ? courseList.content : courseList.try">
		</view>
		<view class="buttonBottom" v-if="!courseList.isbuy">
			<button @click="handleClickPay">{{group_id ? `立即拼团￥8` :`立即订购${courseList.price}`}}</button>
		</view>
	</view>
</template>

<script>
	//引入api
	import collectApi from "@/api/group.js"
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
				collectFrom: {
					goods_id: "",
					type: "course",
				}
			}
		},
		onLoad() {

		},
		filters: {
			formatType(value) {
				const type = {
					media: "图文",
					audio: "音频",
					video: "视频",
					column: '图文'
				}
				return type[value]
			}
		},
		methods: {
			//点击收藏icons 触发的方法
			async handleCollect() {
				try {
					this.collectFrom.goods_id = this.courseList.id
					uni.showLoading({
						mask: true
					})
					const response = await collectApi.getCartercollect(this.collectFrom)
					console.log(response);
					if (response.data.msg == "ok") {
						uni.hideLoading()
						this.$util.msg("收藏成功")
					} else {
						this.$util.msg(response.data.data)
					}
				} catch (e) {
					uni.hideLoading()
					console.log(e);
					//TODO handle the exception
				}
			},
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
		position: relative;
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
