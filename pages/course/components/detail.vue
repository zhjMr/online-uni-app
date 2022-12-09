<template>
	<view>
		<view>
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

	</view>
</template>

<script>
	export default {
		props: {
			courseList: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {

			}
		},
		onLoad(options) {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
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
</style>
