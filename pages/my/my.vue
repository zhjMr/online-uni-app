<template>
	<view>
		<view class="myBox">
			<myPhoto></myPhoto>
			<mycatalogue></mycatalogue>
		</view>
		<myOptions></myOptions>
	</view>

</template>

<script>
	//用户头像登录组件
	import myPhoto from "@/pages/my/components/myUser.vue"
	//订单消息目录组件
	import mycatalogue from "@/pages/my/components/catalogue.vue"
	//优惠设置选项组件
	import myOptions from "@/pages/my/components/options.vue"
	export default {
		components: {
			myPhoto,
			mycatalogue,
			myOptions
		},
		data() {
			return {

			}
		},
		//监听按钮事件
		onNavigationBarButtonTap() {
			//点击。。。跳转到设置页面
			this.navTo("/pages/my-coupon/setting")
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.myBox {
		overflow: hidden;
		width: 100%;
		height: 380rpx;
		margin-bottom: 70rpx;
		background-color: #63c586;
		border-radius: 0 0 20% 20%;

	}
</style>
