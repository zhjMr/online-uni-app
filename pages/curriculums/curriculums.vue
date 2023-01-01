<template>
	<view class="i-clurse">
		<view class="courseList" v-for="(item,index) in specialList" :key="index" @click="handleChangeNew(item)">
			<view class="iamg">
				<view class="autoView">{{item.type | formatType}}</view>
				<image :src="item.cover" mode=""></image>
			</view>
			<view class="texte">
				<view class="title">
					{{item.title}}
				</view>
				<view class="sprice">
					<text v-if="item.price ==0">免费</text>
					<text v-if="item.price >0">￥{{item.price}}</text>
					<text v-if="item.t_price">￥{{item.t_price}}</text>
				</view>
			</view>
		</view>
		<uni-load-more :status="statusMore"></uni-load-more>
	</view>
</template>

<script>
	//引入api
	import specialApi from "@/api/navBack.js"
	export default {
		data() {
			return {
				specialOnject: {
					page: 1,
					limit: 10
				},
				specialList: [],
				statusMore: "loading"
			}
		},
		onLoad() {
			//调用专栏列表数据
			this.getSpecilList()
		},
		filters: {
			formatType(value) {
				let type = {
					media: '图文',
					audio: '音频',
					video: '视频',
					column: '专栏'
				}
				return type[value]
			}
		},
		onReachBottom() {
			if (this.statusMore !== 'more') {
				return
			}
			this.specialOnject.page += 1
			this.getSpecilList()
		},
		onPullDownRefresh() {
			this.specialOnject.page = 1
			this.getSpecilList()
		},
		methods: {
			handleChangeNew(item) {
				if (!item.type) {
					this.navTo(`/pages/column/column?id=${item.id}`)
				} else {
					this.navTo(`/pages/course/course?id=${item.id}`)
				}
			},
			//获取专栏列表数据
			async getSpecilList() {
				try {
					const response = await specialApi.getcourseList(this.specialOnject)
					console.log(response, '课程列表');
					this.specialList = this.specialOnject.page == 1 ? response.data.data.rows : this.specialList
						.concat(response.data.data.rows)
					this.statusMore = response.data.data.rows.length < 10 ? "nomore" : "more"
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				} finally {
					uni.stopPullDownRefresh()
				}
			}
		}
	}
</script>

<style lang="scss">
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

	.i-clurse {
		.courseList {
			margin-top: 40rpx;
			display: flex;
			padding: 0 20rpx;

			.iamg {
				position: relative;
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
					text-decoration: line-through;
				}
			}
		}
	}
</style>
