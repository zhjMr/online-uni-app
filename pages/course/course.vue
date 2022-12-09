<template>
	<view>

		<view v-if="group.group_id">
			<groupFor></groupFor>
		</view>
		<view v-else>
			<datailfor :courseList="courseList"></datailfor>
		</view>
	</view>
</template>

<script>
	//引入详情页组件
	import datailfor from "@/pages/course/components/detail.vue"
	//引入拼团详情组件
	import groupFor from "@/pages/course/components/group.vue"
	//引入api
	import courseApi from "@/api/search.js"
	export default {
		components: {
			datailfor,
			groupFor
		},
		data() {
			return {
				datai: {
					id: 0,
					column_id: 0,
					group_id: 0,
					flashsale_id: 0,
				},
				group: {
					page: 1,
					group_id: 0,
				},
				courseList: {}, //详情列表数据
			}
		},
		onLoad(options) {
			this.group.group_id = options.group_id
			this.datai.id = options.id
			//调用课程详情列表数据
			this.getCourseList()
			//调用拼团详情数据
			this.getgroupList()
		},
		methods: {
			//获取拼团列表数据
			async getgroupList() {
				try {
					const response = await courseApi.getgroup(this.group)
					console.log(response, '拼团详情');
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
			//获取课程详情列表数据
			async getCourseList() {
				try {
					const response = await courseApi.getcourse(this.datai)
					this.courseList = response.data.data
					console.log(response, '课程详情列表数据');
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
