<template>
	<view class="navBar">
		<view class="navList" v-for="(item,index) in iconsNavList" :key="index" @click="handleList(item)">
			<image :src="item.src" mode=""></image>
			<view class="text">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			iconsNavList: {
				type: Array,
				default: () => ([])
			}
		},
		data() {
			return {

			}
		},
		methods: {
			handleList(item) {
				if (item.name == "拼团") {
					this.navTo("/pages/list/list")
					return
				}
				if (item.name == "秒杀") {
					this.navTo("/pages/seckill/seckill")
					return
				}
				if (item.name == "专栏") {
					this.navTo("/pages/special/special")
					return
				}
				if (item.name == "直播") {
					this.navTo("/pages/streaming/streaming")
					return
				}
				if (item.name == "电子书") {
					this.navTo("/pages/books/books")
					return
				}
				if (item.name == "考试") {
					this.navTo("/pages/test-list/test-list")
					return
				}
				if (item.name == "活动") {
					this.navTo(`/pages/webview/webview?url=http://www.dishaxy.com`)
					return
				}
				if (item.name == "社区") {
					this.navTo(`/pages/bbs/bbs`)
					return
				}
			}
		}
	}
</script>

<style lang="scss">
	.navBar {
		width: 100%;
		height: 253rpx;
		display: flex;
		flex-wrap: wrap;
		padding: 30rpx 0;

		.navList {
			width: 25%;
			text-align: center;
			padding-bottom: 20rpx;

			image {
				width: 71rpx;
				height: 71rpx;
				border-radius: 50%;
			}
		}
	}
</style>
