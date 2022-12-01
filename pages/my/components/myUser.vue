<template>
	<view class="myuserBox">
		<view class="topImg">
			<image src="../../../static/noLogin.png" mode=""></image>
		</view>

		<view class="text-user">
			<view class="viewLog">
				<text class="mastafter"> 帝莎编程</text>
				<text class="perpetual">永久会员</text>
			</view>
			<view>暂无描述</view>
		</view>

       <text class="iconfont icon-leimupinleifenleileibie text-white"></text>
	</view>

</template>

<script>
</script>

<style lang="scss">
	.myuserBox {
		position: relative;
		width: 100%;
		height: 200rpx;
		margin-top: 20rpx;
		// background-color: pink;
		display: flex;
		align-items: center;
		.topImg {
			margin-left: 34rpx; 
			width: 150rpx;
			height: 150rpx;
			background-color: #fff;
			border-radius: 50%;
			image{
				width: 100%;
				height: 100%;
			}

		}
		.text-user{
			color: #fff;
			margin-left: 36rpx;
			font-size: 16rpx;
			.perpetual{
				line-height: 70rpx;
				color: #e5bf16;
				margin-left: 30rpx;
			}
			.mastafter{
				font-size: 34rpx
			}
		}
		.iconfont{
		    position: absolute;
			top: 40%;
			right: 34rpx;
			font-size: 35rpx;
			color: #fff;
		}
	}
</style>
