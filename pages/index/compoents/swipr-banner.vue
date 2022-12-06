<template>
	<view class="banner">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in BannerList" :key="index">
				<image :src="item.src" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			BannerList: {
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
	.swiper {
		width: 94%;
		margin: auto;
		height: 305rpx;
		margin-top: 20rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
