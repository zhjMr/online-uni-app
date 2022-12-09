<template>
	<view class="i-clurse">
		<view class="courseList" v-for="(item,index) in columnList" :key="index">
			<view class="iamg">
				<image :src="item.cover" mode=""></image>
			</view>
			<view class="texte">
				<view class="title">
					{{item.title}}
				</view>
				<view class="sprice">
					<text>￥{{item.price}}</text>
					<text>￥{{item.t_price}}</text>
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
		}
	}
</script>

<style lang="scss">
	.i-clurse {
		.courseList {
			margin-top: 40rpx;
			display: flex;
			padding: 0 20rpx;

			.iamg {
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
