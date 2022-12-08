<template>
	<view>
		<view class="history">
			<text>历史记录</text>
			<text @click="handleClickClear">清除全部</text>
		</view>
		<view class="text">
			<text class="title" v-for="(item,index) in historyword" :key="index">{{item}}</text>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		data() {
			return {
				//保存历史记录数据
				historywords: uni.getStorageSync('historyword') || [],
				// 输入框输入事件
				text: ''
			}
		},
		//监听原生标题栏回车事件
		onNavigationBarSearchInputConfirmed() {
			//调用历史记录存储方法
			this.historywordList()
		},
		//监听原生标题栏按钮点击事件
		onNavigationBarButtonTap() {
			//调用历史记录存储方法
			this.historywordList()
		},
		//监听输入框输入事件
		onNavigationBarSearchInputChanged(e) {
			//输入的内容进行保存
			this.text = e.text.trim()
		},
		methods: {
			//清除历史记录的方法
			handleClickClear() {
				// console.log('清除');
				uni.showModal({
					content: '是否要清除历史记录',
					success: (res) => {
						if (res.confirm) {
							this.$store.commit('historywordClear')
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//历史记录存储方法
			historywordList() {
				if (!this.text) {
					this.$util.msg('请输入关键词')
					return
				}
				this.historywords.push(this.text)
				// 将数据传递到vuex
				this.$store.commit("historyword", this.historywords)
				
			}
		},
		computed: {
			...mapState(['historyword'])
		},
	}
</script>

<style lang="scss">
	.history {
		padding: 30rpx 20rpx;
		display: flex;
		// background-color: pink;
		justify-content: space-between;
		align-items: center;

		text:nth-child(1) {
			font-weight: bold;
		}

		text:nth-child(2) {
			font-size: 28rpx;
			color: #666;
		}

	}

	.text {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding: 0 10rpx;

		.title {
			margin: 10rpx;
			padding: 10rpx;
			font-size: 16rpx;
			background-color: #dae0e5;
			border-radius: 50rpx;
		}
	}
</style>
