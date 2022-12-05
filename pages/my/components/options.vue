<template>
	<view class="myuserBox">

		<view class="tabsView" hover-class="active" v-for="(item,index) in navData" :key="index"
			@click="handleChangeNav(item)">
			<view class="tabsLaft">
				<text v-if="item.icon" :class="item.icon"></text>
				<text>{{item.title}}</text>
			</view>

			<view>
				<input v-if="item.input" type="text" class="inputnone" placeholder-style="color: #C0C0C0"
					:placeholder="item.placeholder" v-model="value[item.prop]">
				<view v-if="item.fotIcon" class="right"></view>
				<text v-if="item.text">{{item.text}}</text>
				<view v-if="item.image" class="topImg">
					<image src="../../../static/noLogin.png" mode=""></image>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import NavDataList from "@/config/my/setdiscount.js"
	export default {
		props: {
			value: {
				type: Object,
				default: () => {}
			},
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
				//判断点击的是否是清除缓存
				if (data.title == "清除缓存") {
					uni.showModal({
						title: '是否要清除缓存?',
						success: (res) => {
							if (res.confirm) {
								uni.clearStorageSync()
								this.$set(data, "text", "0kb")
								this.$util.msg("清除成功")
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
				//绑定手机号
				if (data.title == "手机") {
					this.navTo("/pages/bind-phone/bind-phone")
				}
			},
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

	.inputnone {

		width: 200rpx;
	}
</style>
