<template>
	<view>
		<view class="hight-box" v-for="(item,index) in roomList" :key="index">
			<view class="study">
				<text>{{item.title}}</text>
				<text>时长：{{item.expire}}分钟</text>
			</view>
			<view class="study-sum">
				<text>题目总数: {{item.question_count}}</text>
				<text>总分数: {{item.total_score}}</text>
				<text>及格分: {{item.pass_score}}</text>
			</view>
			<view class="study-sum-box">
				<button type="default" :class=" item.is_test ? 'eee' : 'btn'"
					@click="handleChangeRoom(item)">{{item.is_test?'你考过了':'参加考试'}}</button>
			</view>
		</view>
		<uni-load-more :status="moreStatus"></uni-load-more>
	</view>
</template>

<script>
	//引入api
	import roomApi from "@/api/navBack.js"
	export default {
		data() {
			return {
				page: 1,
				limit: 5,
				roomList: [], //考试列表数据
				moreStatus: "loading"
			}
		},
		onShow() {
			//调用考试列表数据	
			this.getRoomList()
		},
		//上拉加载方法
		onReachBottom() {
			if (this.moreStatus !== "more") {
				return
			}
			this.page += 1
			this.getRoomList()
		},
		//下拉刷新方法
		onPullDownRefresh() {
			this.page = 1
			this.getRoomList()
		},
		methods: {
			//点击参加考试触发的方法
			handleChangeRoom(item) {
				// console.log(item,'11');
				uni.showModal({
					content: '是否要开始考试？',
					success: (res) => {
						if (res.confirm) {
							this.navTo(`/pages/test-detail/test-detail?id=${item.id}`)
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//获取考试列表数据
			async getRoomList() {
				try {
					let {
						page,
						limit
					} = this
					const response = await roomApi.getroom({
						page,
						limit
					})
					
					// console.log(response, '考试列表数据');
					this.roomList = this.page == 1 ? response.data.data.rows : this.roomList.concat(response.data.data
						.rows)
					this.moreStatus = response.data.data.rows.length < 5 ? "noMore" : "more"
				} catch (e) {
					console.log(e);
				} finally {
					uni.stopPullDownRefresh()
				}
			}
		}
	}
</script>

<style lang="scss">
	.hight-box {
		padding: 0 30rpx;
		border-bottom: 14rpx solid #eee;

		.eee {
			background-color: #7be09f;
			float: right;
			margin-top: 10rpx;
			width: 200rpx;
			height: 86rpx;
			line-height: 86rpx;
			text-align: center;
			color: #fff;
		}

		.study {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 103rpx;
			border-top: 1rpx solid #eee;
			border-bottom: 1rpx solid #eee;

			text:nth-child(1) {
				font-weight: bold;
			}

			text:nth-child(2) {
				font-size: 26rpx;
				color: #dd3a4b;
			}
		}

		.study-sum {
			display: flex;
			align-items: center;
			width: 100%;
			height: 95rpx;
			border-bottom: 1rpx solid #eee;

			text:nth-child(2) {
				margin: 0 40rpx;
			}
		}

		.study-sum-box {
			width: 100%;
			height: 110rpx;

			.btn {
				float: right;
				margin-top: 10rpx;
				width: 200rpx;
				height: 86rpx;
				line-height: 86rpx;
				text-align: center;
				color: #fff;
				background-color: #5ccc84;
			}
		}
	}
</style>
