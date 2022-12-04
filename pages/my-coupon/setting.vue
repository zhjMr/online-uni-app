<template>
	<view>
		<optionsSet :navData="navData"></optionsSet>
		<button class="buttons" @click="handleLoginOut">退出登录</button>
	</view>
</template>

<script>
	//引入目录组件
	import optionsSet from "@/pages/my/components/options.vue"
	//引入我的设置页面模拟数据
	import mysetting from "@/config/my/setting.js"
	//引入api
	import LoginApi from "@/api/login.js"
	export default {
		props: {
			navData: {
				type: Array,
				default: mysetting
			}
		},
		components: {
			optionsSet
		},
		data() {
			return {

			}
		},
		methods: {
			handleLoginOut() {
				uni.showModal({
					content: '是否要退出登录',
					success: async (res) => {
						console.log(res);
						if (res.confirm) {
							try {
								const response = await LoginApi.getLoginOut()
								this.$store.commit("logout")

								this.$util.msg('成功退出登录')

								setTimeout(() => {
									this.navBack()
								}, 300)
							} catch (e) {
								//TODO handle the exception
								this.$util.msg("退出登录失败")
							}

						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.buttons {
		width: 696rpx;
		height: 89rpx;
		margin: auto;
		line-height: 89rpx;
		text-align: center;
		background-color: #5ccc84;
		color: #fff;
		margin-top: 20rpx;
	}
</style>
