<template>
	<view class="myuserBox">

		<view class="tabsView" hover-class="active" v-for="(item,index) in navData" :key="index">
			<view class="tabsLaft">
				<text :class="item.icon"></text>
				<text>{{item.title}}</text>
			</view>
			<view class="right">

			</view>
		</view>
	</view>
</template>

<script>
	import NavDataList from "@/config/my/setdiscount.js"
	export default {
		props: {
			navData: {
				type: Array,
				default: NavDataList
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	.myuserBox {
		margin-top: 100rpx;

		.tabsView {
			box-sizing: border-box;
			width: 100%;
			height: 120rpx;
			// background-color: pink;
			border-bottom: 1rpx solid #eee;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 40rpx;
		}
	}

	.iconfont {
		color: #3296ff;
		font-size: 44rpx;
		vertical-align: middle;
	}

	.active {
		background-color: #fafafa !important;
	}

	.right {
		margin-top: 5px;
		float: right;
		width: 9px;
		height: 9px;
		border-top: 2px solid #ccc;
		border-right: 2px solid #ccc;
		-webkit-transform: rotate(45deg);
		transform:
			rotate(45deg);
	}
</style>
