<template>
	<view>
		<view class="over">
			<scroll-view scroll-x="true" @scrolltolower="scorllClick">
				<view class="bbslist">
					<view v-for="(item,index) in barList" :key="index">
						<text class="text">{{item.title}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import bbsFromList from "@/api/navBack.js"
	export default {
		data() {
			return {
				page: '1',
				barList: []
			}
		},
		onLoad() {
			this.getBbsList()
		},
		methods: {
			scorllClick() {
				console.log(111);
			},
			async getBbsList() {
				try {
					const response = await bbsFromList.getbbs(this.page)
					console.log(response);
					this.barList = response.data.data.rows
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="scss">
	.over {
		width: 100%;
		height: 120rpx;
		display: flex;
		overflow-y: hidden;
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
