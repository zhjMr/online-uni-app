<template>
	<view>
		<view class="books-box" v-for="(item,index) in booksList" :key="index">
			<view class="imag">
				<image :src="item.cover" mode=""></image>
			</view>
			<view class="right">
				<view class="title">
					<view>{{item.title}}</view>
				</view>
				<view class="price">
					<view class="money">
						<text>￥{{item.price}}</text>
						<text>￥{{item.t_price}}</text>
					</view>
					<view class="rouses">
						<text>{{item.sub_count}}人订阅</text>
						<text>
							<uni-icons type="arrow-right" size="10"></uni-icons>
						</text>
					</view>
				</view>
			</view>


		</view>
	</view>
</template>

<script>
	//引入api'
	import booksApi from "@/api/navBack.js"
	export default {
		data() {
			return {
				booksObject: {
					page: 1,
					limit: 10
				},
				booksList: []
			}
		},
		onLoad() {
			//调用电子书方法
			this.getBooksList()
		},
		methods: {
			//获取电子书接口数据
			async getBooksList() {
				try {
					const response = await booksApi.getbooke(this.booksObject)
					console.log(response, '电子数据');
					this.booksList = response.data.data.rows
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="scss">
	.books-box {
		display: flex;
		padding: 30rpx;

		.imag {
			margin-right: 20rpx;
			width: 186rpx;
			height: 238rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.title {
				width: 100%;
				overflow: hidden; //超出隐藏
				white-space: nowrap; //不折行
				text-overflow: ellipsis; //溢出显示省略号
			}
		}

		.price {
			display: flex;
			justify-content: space-between;
			.money {
				text:nth-child(1) {
					color: #dd3a4b;
					font-size: 30rpx;
				}

				text:nth-child(2) {
					font-size: 16rpx;

				}
			}

			.rouses {
				display: flex;
				justify-content: space-around;
				width: 200rpx;
				height: 65rpx;
				border: 2rpx solid #ccc;
				border-radius: 30rpx;

				text:nth-child(1) {
					line-height: 65rpx;
					font-size: 26rpx;
				}

				
			}
		}
	}
</style>
