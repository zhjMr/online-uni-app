<template>
	<view>
		<scroll-view scroll-x="true" class="px-1 pt-2 scroll-row" @scrolltolower="handleBbsLoadMore">
			<view v-for="(item,index) in barList" :key="index" @click="changeCurrent(item.id)"
				:class="{active:data.bbs_id==item.id}" class="scroll-row-item border px-3 py-1 rounded mx-1 mb-2">
				{{ item.title }}
			</view>
		</scroll-view>


		<view class="divider"></view>

		<view class="flex py-2">
			<view class="flex-1 flex align-center justify-center text-muted font-md">
				<text class="font-weight-bold mr-2">总帖子</text>{{postCount}}
			</view>
			<view class="flex-1 flex align-center justify-center text-muted font-md">
				<text class="font-weight-bold mr-2">总用户</text>{{userCount}}
			</view>
		</view>
		<view class="divider"></view>

		<bbsItem v-for="(item,index) in list" :key="index" :item="item"></bbsItem>

	</view>
</template>

<script>
	import bbsFromList from "@/api/navBack.js"
	import bbsAPi from "@/api/bbs.js"
	import bbsItem from "@/pages/bbs/components/bbs-item.vue"
	export default {
		components: {
			bbsItem
		},
		data() {
			return {
				data: {
					page: 1, //当前页
					keyword: '', //搜索内容
					bbs_id: 0, //当前id
				},
				list: [],
				barList: [],
				postCount: 266, //总帖子
				userCount: 2349, //总用户
			}
		},
		// 实时会获取搜索框你们的内容
		onNavigationBarSearchInputChanged(e) {
			console.log(e)
			this.data.keyword = e.text
			console.log(this.data.keyword)
		},
		// 回车 
		onNavigationBarSearchInputConfirmed() {
			console.log(this.data)
			this.getList()
		},
		// 按钮 跳转新增帖子页面 
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.navTo('/pages/add-post/add-post')
			}
		},
		onLoad() {
			this.getBbsList()
		},
		onShow() {
			this.getList()
		},
		onReachBottom() {
			this.data.page += 1
			this.getList()
		},
		methods: {
			//向右滑动触发的方法
			handleBbsLoadMore() {
				this.data.page += 1
				this.getBbsList()
			},
			// 切换当前选中
			changeCurrent(id) {
				this.data.bbs_id = id
				this.getList()
			},
			//获取帖子列表数据
			async getList() {
				try {
					uni.showLoading({
						mask: true
					})
					let response = await bbsAPi.getPostList(this.data)
					console.log(response, '111');
					this.list = this.data.page === 1 ? response.data.data.rows : this.list.concat(response
						.data
						.data.rows)
					uni.hideLoading()

				} catch (e) {
					console.log("error=>", e)
					uni.hideLoading()
				}
			},
			async getBbsList() {
				try {
					const response = await bbsFromList.getbbs(this.data)
					console.log(response);

					if (response.data.code == 20000) {
						this.postCount = response.data.data.postCount
						this.userCount = response.data.data.userCount

						if (this.data.page == 1) {
							this.barList = response.data.data.rows
							this.barList.unshift({
								id: 0,
								title: "全部"
							})
							return
						}
						this.barList = this.data.page === 1 ? response.data.data.rows : this.barList.concat(response
							.data
							.data.rows)
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
	.active {
		background-color: #5ccc84;
		color: #fff;
	}

	.over {
		height: 120rpx;
		display: flex;
		border-bottom: 16rpx solid #eee;

		.bbslist {
			display: flex;

			.text {
				padding: 10rpx;
				margin-left: 20rpx;
				line-height: 120rpx;
				background-color: #f5f5f3;
				border: 1rpx solid #ccc;
				border-radius: 10rpx;
			}
		}
	}
</style>
