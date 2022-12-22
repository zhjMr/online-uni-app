<template>
	<view>
		<view>
			<datailfor @handleclickOk='handleclickOk' :courseList="courseList" :group_id="group_id"></datailfor>
		</view>
	</view>
</template>

<script>
	//引入详情页组件
	import datailfor from "@/pages/course/components/detail.vue"
	//引入api
	import courseApi from "@/api/search.js"
	import studyApi from "@/api/study.js"
	let windowHeight = uni.getSystemInfoSync().windowHeight
	export default {
		components: {
			datailfor,
		},
		data() {
			return {
				datai: {
					id: 0,
					column_id: 0,
					group_id: 0,
					flashsale_id: 0,
				},
				courseList: {}, //详情列表数据
				group_id: 0,
				column_id: 0,
				scrollTop: 0,
				mediaHeight: 0,
				progress: 0
			}
		},
		onLoad(options) {
			this.group_id = options.group_id
			this.datai.id = options.id
			//调用课程详情列表数据
			this.getCourseList()
		},
		onPageScroll(e) {
			if (this.courseList.isbuy && this.courseList.type === "media" && e.scrollTop > this.scrollTop) {
				this.scrollTop = e.scrollTop
			}
			this.handleMediaProgress()
			// console.log("scrollTop=>", this.scrollTop)
		},
		beforeDestroy() {
			this.handleUpdateStudyProgress()
		},
		methods: {
			handleclickOk(e) {
				this.progress = e
			},
			// 将学习进度提交到后台
			async handleUpdateStudyProgress() {
				try {
					let data
					if (this.column_id === 0) {
						data = {
							id: this.courseList.id,
							type: "course",
							progress: this.progress
						}
					} else {
						data = {
							detail_id: this.courseList.id,
							id: this.column_id,
							type: 'column'
						}
					}

					const response = await studyApi.setStudyUserHistory(data)

					uni.$emit("progress")
				} catch (e) {
					//TODO handle the exception
					console.log("error=>", e)
				}
			},
			// 计算学习的进度
			handleMediaProgress() {

				// this.progress = (((this.scrollTop + windowHeight)/this.mediaHeight)*100).toFixed(2)
				this.progress = ((this.scrollTop + windowHeight) / 34.50).toFixed(2)
				console.log(this.progress);

			},
			//获取课程详情列表数据
			async getCourseList() {
				try {
					const response = await courseApi.getcourse(this.datai)
					this.courseList = response.data.data
					console.log(response, '课程详情列表数据');
					//动态设置标题栏的方法
					uni.setNavigationBarTitle({
						title: response.data.data.title
					})
					if (response.data.data == "该记录不存在") {
						this.$util.msg(response.data.data)
						setTimeout(() => {
							this.navBack()
						}, 500)
					}
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			}
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
