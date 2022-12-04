<template>
	<view class="myuserBox">

		<view class="tabsView" hover-class="active" v-for="(item,index) in navData" :key="index"
			@click="handleChangeNav(item)">
			<view class="tabsLaft">
				<text v-if="item.icon" :class="item.icon"></text>
				<text>{{item.title}}</text>
			</view>

			<view>
				<view v-if="item.fotIcon" class="right"></view>
				<text v-if="item.text">{{item.text}}</text>
				<view v-if="item.image" class="topImg">
					<image :src="item.image" mode=""></image>
				</view>
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
		},
		methods: {
			handleChangeNav(data) {
				console.log(data);
				//判断是否有跳转的路径 有进行跳转
				if (data.page) {
					this.navTo(data.page, {
						login: data.isLogin
					})
				}

			}
		}
	}
</script>

<style lang="scss">
	.myuserBox {
		// margin-top: 70rpx;

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

	.topImg {
		margin-left: 34rpx;
		width: 150rpx;
		height: 150rpx;
		background-color: #fff;
		border-radius: 50%;

		image {
			width: 100%;
			height: 100%;
		}

	}
</style>
