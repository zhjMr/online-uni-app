<template>
	<view>
		<view class="roomTime">
			<view class="time">
				考试时间 00:54:27
			</view>
			<view class="roudos">
				<text>单选选题</text>
				<text>第1题</text>
			</view>
			<view class="title">
				 <view>
				 	判断题
				 </view>
				 <view class="topUe">
				 	 曹操是三国时期的人物
				 </view>
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
	.roomTime {
		.time {
			padding: 26rpx 0;
			text-align: center;
			border-top: 2rpx solid red;
			border-bottom: 2rpx solid red;
			color: red;
		}
		.roudos{
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			border-bottom: 1rpx solid #eee;
			text:nth-child(2){
				font-size: 16rpx;
				color: #666;
			}
		}
		.title{
			padding: 20rpx;
		}
	}
</style>
