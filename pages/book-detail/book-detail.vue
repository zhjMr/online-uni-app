<template>
	<view>
		<view class="contents">
			<view class="iamg">
				<!-- <view class="autoView">{{courseList.type | formatType }}专栏</view> -->
				<image :src="courseList.cover" mode=""></image>
				<view class="codes">
					<view>{{courseList.title}}</view>
					<view class="mondIng">
						<text class="boxRed">￥{{courseList.price}}</text>
						<text class="Linhige">￥{{courseList.t_price}}</text>
						<text class="ren">{{courseList.sub_count}}人</text>
					</view>
				</view>
			</view>
			<!-- tabbar组件 -->
			<tabBar :tabBarList="tabBarList" @change="handelActive"></tabBar>

			<!-- 简介 -->
			<view v-if="current === 0">
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

				</view>
				<view class="special">
					电子书简介
				</view>
				<view class="content" v-html="courseList.try">
				</view>
			</view>

			<!-- 目录 -->
			<view v-if="current === 1">
				<!-- 共多少节 -->
				<view class="p-3">
					<view class="bg-light border p-2 text-muted rounded">
						共 {{columnList.length}} 节
					</view>
				</view>

				<!-- 专栏列表 -->
				<i-menu-item @click="handleOpenDetail(item)" v-for="(item,index) in columnList" :key="index"
					:index="index" :title="item.title">
					<view class='flex'>
						<text v-if="item.isfree"
							class="border border-danger text-danger rounded font-sm px-1 mt-1">
							免费试看
						</text>
					</view>

				</i-menu-item>
			</view>
			<view class="buttonBottom" v-if="!courseList.isbuy">
				<button @click="handleClickPay">{{'立即订购'+ courseList.price}}</button>
			</view>
		</view>

	</view>
</template>

<script>
	//引入api
	import collectApi from "@/api/book.js"
	export default {
		data() {
			return {
				current: 0,
				tabBarList: ['简介', '目录'],
				columnList: [], //目录列表
				courseList: {}, //详情列表数据
				id: ""
			}
		},
		
		onLoad(options) {
			this.id = options.id
			//调用电子详情列表数据
			this.getcolumn()
		},
		methods: {
			handleOpenDetail(item) {
				if (item.price != 0 && !this.courseList.isbuy) {
					this.$util.msg("请先购买该电子书")
					return
				}
			},
			//获取tbbar点击切换事件
			handelActive(e) {
				// console.log(e);
				// 获取点击的下标
				this.current = e
			},
			//获取专栏列表数据
			async getcolumn() {
				try {
					let {
						id
					} = this
					const response = await collectApi.bookDetail({
						id
					})
					console.log(response, '电子');
					this.columnList = response.data.data.book_details
					this.courseList = response.data.data
					uni.setNavigationBarTitle({
						title: response.data.data.title
					})
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.special {
		padding: 30rpx;
		border-bottom: 1rpx solid #eee;
		border-top: 18rpx solid #eee;
		margin-bottom: 20rpx;
	}

	.iamg {
		display: flex;

		padding: 20rpx;
		position: relative;
		width: 100%;

		image {
			width: 300rpx;
			height: 422rpx;
		}
	}

	.codes {
		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		view:nth-child(1) {

			font-size: 40rpx;
		}

		view:nth-child(2) {}
	}

	.activeClass {
		color: greenyellow;
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

	.mondIng {
		background-color: #fff7f0;
		padding: 20rpx;
		border: 1rpx solid #ec8e45;

		.boxRed {
			font-size: 40rpx;
			color: #e33443;
		}

		.Linhige {
			padding: 0 10rpx;
			border-right: 4rpx solid #e33443;
			font-size: 30rpx;
			color: #c3c2bd;
		}

		.ren {
			padding: 20rpx;
			color: #e33443;
		}
	}

	.content {
		padding: 0 30rpx;
	}
</style>
