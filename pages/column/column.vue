<template>
	<view>
		<view class="contents">
			<view class="iamg">
				<view class="autoView">{{courseList.type | formatType }}专栏</view>
				<image :src="courseList.cover" mode=""></image>
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
					<view class="store" :class="[ courseList.isfava ? 'activeClass' : '' ]">
						<uni-icons type="star" size="30" @click="handleCollect" :color='`${courseList.isfava}` '>
						</uni-icons>
					</view>
				</view>

				<view class="special">
					专栏简介
				</view>
				<view class="content" v-html="courseList.content">
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
						<text class="border border-danger text-danger rounded font-sm px-1 mt-1 mr-2">
							{{item.type | formatType}}
						</text>
						<text v-if="item.price == 0" class="border border-danger text-danger rounded font-sm px-1 mt-1">
							免费试看
						</text>
					</view>

				</i-menu-item>
			</view>


			<view class="buttonBottom" v-if="!courseList.isbuy">
				<button @click="handleClickPay">{{group_id ? `立即拼团￥8` :`立即订购${courseList.price}`}}</button>
			</view>
		</view>

	</view>
</template>

<script>
	//引入api
	import collectApi from "@/api/group.js"
	export default {
		data() {
			return {
				current: 0,
				tabBarList: ['简介', '目录'],
				columnList: [], //目录列表
				datai: {
					id: 0,
					column_id: 0,
					group_id: 0,
					flashsale_id: 0,
				},
				courseList: {}, //详情列表数据
				group_id: 0,

				collectFrom: {
					goods_id: "",
					type: "column",
				}
			}
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
		onLoad(options) {
			this.group_id = options.group_id
			this.datai.id = options.id
			//调用课程详情列表数据
			this.getcolumn()
		},
		methods: {
			handleOpenDetail(item) {
				if (item.price != 0 && !this.courseList.isbuy) {
					this.$util.msg("请先购买该专栏")
					return
				}
				this.navTo("/pages/course/course?id=" + item.id + "&column_id=" + this.courseList.id, {
					login: true
				})
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
					const response = await collectApi.getcolumn(this.datai)
					console.log(response, '专栏数据');
					this.courseList = response.data.data
					this.columnList = response.data.data.column_courses
					uni.setNavigationBarTitle({
						title: response.data.data.title
					})
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
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
						this.courseList.isfava = true
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
				this.navTo(`/pages/create-order/create-order?id=${courseList.id}&type=column`, {
					login: true
				})
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

	.activeClass {
		color: greenyellow;
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
