<template>
	<view>
		<view class="contents">
			<view class="iamg">
				<image :src="courseList.cover" mode=""></image>
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
			<button>立即订购￥{{courseList.price}}</button>
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
		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.contents{
		border-bottom: 14rpx solid #eee;
	}
	.special{
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
.content{
	padding: 0 30rpx;
}
	::v-deep img {
		margin: auto;
		width: 100% !important;
		
		
	}
	.bottom{
		width: 100%;
		height: 200rpx;
		padding: 0 30rpx;
		border-top: 6rpx solid #666;
	}
	.buttonBottom{
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #fff;
		padding: 30rpx;
		border-top: 1rpx solid #eee;
		button{
			background-color: #5ccc84;
			color: #fff;
		}
		
	}
</style>
