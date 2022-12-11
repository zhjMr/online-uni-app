<template>
	<view>
		<view>
			<datailfor :courseList="courseList" :group_id="group_id"></datailfor>
		</view>
	</view>
</template>

<script>
	//引入详情页组件
	import datailfor from "@/pages/course/components/detail.vue"
	//引入api
	import courseApi from "@/api/search.js"
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
				group_id: 0
			}
		},
		onLoad(options) {
			this.group_id = options.group_id
			this.datai.id = options.id
			//调用课程详情列表数据
			this.getCourseList()
		},
		methods: {
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
