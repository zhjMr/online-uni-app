<template>
	<view class="search-result flex flex-column flex-1">
		<i-no-login v-if="!hasLogin"></i-no-login>

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
						课程
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" @scrolltolower="hendleChangeBottom"
					class="scroll-view-height list-content">
					<view>
						专栏
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import cardtab from "@/pages/my/components/catalogue.vue"
	import {
		mapGetters
	} from "vuex"
	export default {
		components: {
			cardtab
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
				]

			}
		},
		computed: {
			...mapGetters([
				"hasLogin"
			])
		},
		methods: {
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
