<template>
	<view>
		<view class="hight-box">
			<view class="study">
				<text>htrdhrte</text>
				<text>时长：60分钟</text>
			</view>
			<view class="study-sum">
				<text>题目总数: 10</text>
				<text>总分数: 100</text>
				<text>及格分: 60</text>
			</view>
			<view class="study-sum-box">

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.hight-box {
		padding: 0 30rpx;
		border-bottom: 14rpx solid #eee;

		.study {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 103rpx;
			border-top: 1rpx solid #eee;
			border-bottom: 1rpx solid #eee;

			text:nth-child(1) {
				font-weight: bold;
			}

			text:nth-child(2) {
				font-size: 26rpx;
				color: #dd3a4b;
			}
		}

		.study-sum {
			display: flex;
			align-items: center;
			width: 100%;
			height: 95rpx;
			border-bottom: 1rpx solid #eee;

			text:nth-child(2) {
				margin: 0 40rpx;
			}
		}

		.study-sum-box {
			width: 100%;
			height: 110rpx;

		}
	}
</style>
