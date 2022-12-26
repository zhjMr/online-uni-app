<template>
	<view>
		<view class="books-box" v-for="(item,index) in booksList" :key="index" @click="handleClickPages(item)">
			<view class="imag">
				<image :src="item.cover" mode=""></image>
			</view>
			<view class="right">
				<view class="title">
					<view>{{item.title}}</view>
				</view>
				<view class="price">
					<view class="money">
						<text v-if="item.price==0">免费</text>
						<text v-if="item.price>0">￥{{item.price}}</text>
						<text v-if="item.t_price">￥{{item.t_price}}</text>
					</view>

					<view class="border flex align-center  rounded-circle px-2 py-1 ml-auto text-muted"
						style="color: #6c757d;margin-right: 30rpx;">
						{{item.sub_count}}人订阅
						<text class="iconfont icon-xiayibu ml-1"></text>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="moreStatus"></uni-load-more>
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
				booksList: [],
				moreStatus: "loading"
			}
		},
		onLoad() {
			//调用电子书方法
			this.getBooksList()
		},
		//下拉刷新的方法
		onPullDownRefresh() {
			this.booksObject.page = 1
			this.getBooksList()
		},
		//上拉加载的方法
		onReachBottom() {
			if (this.moreStatus !== 'more') {
				return
			}
			this.booksObject.page += 1
			this.getBooksList()
		},
		methods: {
			//点击电子书触发的方法
			handleClickPages(item) {
				this.navTo(`/pages/book-detail/book-detail?id=${item.id}`, {
					login: true
				})
			},
			//获取电子书接口数据
			async getBooksList() {
				try {
					const response = await booksApi.getbooke(this.booksObject)
					console.log(response, '电子数据');
					this.booksList = this.booksObject.page === 1 ? response.data.data.rows : this.booksList.concat(
						response.data.data.rows)
					this.moreStatus = response.data.data.rows.length > 10 ? "noMore" : "more"
				} catch (e) {
					console.log(e);
					this.moreStatus = "more"
					if (this.booksObject.page > 1) {
						this.booksObject.page = this.booksObject.page - 1
					}
					//TODO handle the exception
				} finally {
					uni.stopPullDownRefresh()
				}
			}
		}
	}
</script>

<style lang="scss">
	.books-box {
		position: relative;
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

			.border {
				right: 0;
				bottom: 20rpx;
				position: absolute;
			}

			.money {
				text:nth-child(1) {
					color: #dd3a4b;
					font-size: 30rpx;
				}

				text:nth-child(2) {
					font-size: 16rpx;
					

				}
			}
		}
	}
</style>
