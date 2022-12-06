<template>
	<view class="navBar">
		<view class="navList" v-for="(item,index) in iconsNavList" :key="index">
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
