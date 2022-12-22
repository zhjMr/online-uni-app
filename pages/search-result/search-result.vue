<template>
	<view>

		<!-- 自定义组件 -->
		<nav-tab ref="tab" @change="swtichSwiper"></nav-tab>

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
</template>

<script>
	//引入专栏列表组件
	import special from "@/pages/search-result/components/i-special.vue"
	//引入课程列表组件
	import courseTo from "@/pages/search-result/components/i-course.vue"
	//引入tabbar组件
	import NavTab from "@/components/tabBar/tabBar.vue"
	//引入api 
	import searchApi from "@/api/search.js"
	//引入vuex

	export default {
		components: {
			NavTab,
			courseTo,
			special
		},
		data() {
			return {
				// swiper索引
				current: 0,
				keyword: '',
				page: 1,
				type: "course",
				loadMore: "more",
				courseList: [], //课程列表数据
				columnList: [], //专栏列表数据

			}
		},
		//监听原生输入框点击事件
		onNavigationBarSearchInputClicked() {
			this.navBack()
		},
		onLoad(option) {
			//跳转传递的搜索关键字
			this.keyword = option.keyword
			//调用课程列表
			this.getSearchList()
			//调用专栏列表
			this.getSearchcolumn()
		},
		computed: {

		},
		methods: {
			//下拉到底部触发的事件
			hendleChangeBottom() {
				if (this.type == "course") {
					this.page += 1
					this.getSearchList()
				} else {
					this.page += 1
					this.getSearchcolumn()
				}
			},

			swipeIndex(index) {
				// 获得swiper切换后的current索引
				this.$refs.tab.switchTab(index.detail.current)

				// scroll
				this.$refs.tab.activeChanged(index.detail.current)
			},
			swtichSwiper(index) {
				// 通过tab组件回调点击切换的index同步swiper的current索引
				this.current = index
			},
			//获取搜索的数据
			async getSearchList() {
				try {
					let {
						keyword,
						page,
						type
					} = this
					const response = await searchApi.getSearchInput({
						keyword,
						page,
						type
					})
					console.log(response, '课程列表数据');

					this.courseList = this.page === 1 ? response.data.data.rows : [...this.courseList, ...response.data
						.data.rows
					]
					this.loadMore = response.data.data.rows.length < 10 ? 'noMore' : 'more'
				} catch (e) {
					this.loadMore = 'more'
					if (this.page > 1) {
						this.page = this.page - 1
					}
					console.log(e);
					//TODO handle the exception
				}
			},
			async getSearchcolumn() {
				try {
					let {
						keyword,
						page,
						type
					} = this
					const response = await searchApi.getSearchInput({
						keyword,
						page,
						type: "column"
					})
					console.log(response, '专栏列表数据');
					this.columnList = this.page === 1 ? response.data.data.rows : [...this.columnList, ...response.data
						.data.rows
					]
					this.loadMore = response.data.data.rows.length < 10 ? 'noMore' : 'more'
				} catch (e) {
					this.loadMore = 'more'
					if (this.page > 1) {
						this.page = this.page - 1
					}
					console.log(e);
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="scss">
	.scroll-view-height {
		/* 页面高度减去包含状态栏、标题、tab组件的高度 */
		height: calc(100vh - var(--status-bar-height) - 178rpx);
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
