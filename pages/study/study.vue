<template>
	<view>
		<view class="search-result flex flex-column flex-1">
			<view class="px-3 botm">
				<cardtab :orderList="cardTabs"></cardtab>
			</view>

			<tabBar ref="tab" :tabBarList="tabBarList" @change="handleTabList"> </tabBar>
			<!-- 当前滑块内容 -->
			<swiper class="scroll-view-height" @change="swipeIndex" :current="current" :duration="300">
				<swiper-item>
					<scroll-view @scrolltolower="hendleChangeBottom" scroll-y="true"
						class="scroll-view-height list-content">
						<view>
							<!-- 课程列表 -->
							<courseTo :courseList="courseList"></courseTo>
							<uni-load-more :status="loadMore"></uni-load-more>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y="true" @scrolltolower="hendleChangeBottom"
						class="scroll-view-height list-content">
						<view>
							<!-- 专栏列表 -->
							<special :columnList="columnList"></special>
							<uni-load-more :status="loadMore"></uni-load-more>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<i-no-login v-if="!hasLogin"></i-no-login>
	</view>
</template>

<script>
	import cardtab from "@/pages/my/components/catalogue.vue"
	//引入api
	import studyApi from "@/api/study.js"
	//引入专栏列表组件
	import special from "@/pages/search-result/components/i-special.vue"
	//引入课程列表组件
	import courseTo from "@/pages/search-result/components/i-course.vue"
	import {
		mapGetters
	} from "vuex"
	export default {
		components: {
			cardtab,
			special,
			courseTo
		},
		data() {
			return {
				current: 0,
				tabBarList: ['课程', '专栏'],
				cardTabs: [{
						id: "1",
						icon: "iconfont icon-OrderHistory",
						text: "帖子",
						isLogin: true,
						page: "/pages/my-post/my-post"
					},
					{
						id: "2",
						icon: "iconfont icon-pinglun2",
						text: "考试",
						isLogin: true,
						page: "/pages/my-test/my-test"
					},
					{
						id: "3",
						icon: "iconfont icon-shoucang1",
						text: "电书",
						pages: "/pages/my-book/my-book"
					},
				],
				page: 1,
				type: "course",
				loadMore: "more",
				courseList: [], //课程列表数据
				columnList: [], //专栏列表数据

			}
		},
		computed: {
			...mapGetters([
				"hasLogin"
			])
		},
		onShow() {
			//调用课程
			this.getStudyList()
			//调用专栏
			this.getcolumnList()
		},
		methods: {
			//下拉到底部触发的事件
			hendleChangeBottom() {
				if (this.type == "course") {
					this.page += 1
					this.getStudyList()
				} else {
					this.page += 1
					this.getcolumnList()
				}
			},
			//获取课程
			async getStudyList() {
				try {
					let {
						page
					} = this
					const response = await studyApi.getStatus({
						page,
						type: 'course'
					})
					console.log(response, '课程列表');
					this.courseList = this.page === 1 ? response.data.data.rows : [...this.courseList, ...response.data
						.data.rows
					]
					this.loadMore = response.data.data.rows.length < 10 ? 'noMore' : 'more'
				} catch (e) {
					this.loadMore = 'more'
					if (this.page > 1) {
						this.page =this.page - 1
					}
					console.log(e);
					//TODO handle the exception
				}
			},
			//获取专栏
			async getcolumnList() {
				try {
					let {
						page
					} = this
					const response = await studyApi.getStatus({
						page,
						type: 'column'
					})
					console.log(response, '专栏列表');
					this.columnList = this.page === 1 ? response.data.data.rows : [...this.columnList, ...response.data
						.data.rows
					]
					this.loadMore = response.data.data.rows.length < 4 ? 'noMore' : 'more'
				} catch (e) {
					this.loadMore = 'more'
					if (this.page > 1) {
						this.page =this.page - 1
					}
					console.log(e);
					//TODO handle the exception
				}
			},
			swipeIndex(index) {
				// 获得swiper切换后的current索引
				this.$refs.tab.switchTab(index.detail.current)

				// scroll
				this.$refs.tab.activeChanged(index.detail.current)
			},
			//点击tabbar点击事件
			handleTabList(index) {
				// console.log(index);
				this.current = index
			}
		}
	}
</script>

<style lang="scss">
	.botm {
		margin-bottom: 220rpx;
	}

	.scroll-view-height {
		/* 页面高度减去包含状态栏、标题、tab组件的高度 */
		height: calc(100vh - var(--status-bar-height) - 520rpx);
	}

	.list-content {
		background-color: #F4F4F4;
	}

	.list-item {
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		margin: 4rpx 0;
		background-color: #FFFFFF;
	}
</style>
