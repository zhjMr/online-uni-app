<template>
	<view class="container">
		<!-- scroll -->
		<!-- <view class="scroll-box">
			<scroll-view class="scroll-view_H d-flex" scroll-x="true" @scroll="scroll" scroll-left="0">
				<view :class="['scroll-view-item_H',i === active ? 'active':'']" v-for="(item,i) in tabBarList"
					@click="activeChanged(i)">
					{{item}}
				</view>
			</scroll-view>
		</view> -->

		<!-- table -->
		<view class="tab">
			<view class="tab-item " v-for="(item,index) in tabBarList" :class="{'tab-item-active' : index === current}"
				:key="index" @click="switchTab(index)">
				{{item}}
				<view class="centent" :class="{naTive:index === current}">

				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "tabBar",
		props: {
			tabBarList: {
				type: Array,
				default: () => ([
					"课程", '专栏',
				])
			}
		},
		data() {
			return {
				current: 0,
				active: 0,
			};
		},
		methods: {
			switchTab(index) {
				this.current = index
				// 向父页面回传tab索引
				this.$emit('change', index)

			},

			scroll: function(e) {
				// console.log(e)	
			},
			activeChanged(i) {
				this.active = i;
				this.$emit('change', i)
			},
		}
	}
</script>

<style lang="scss">
	.tab {
		position: relative;
		justify-content: space-around;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
	}

	.tab-item {
		width: 50%;
		text-align: center;
		color: #333;
	}

	.tab-item-active {
		color: #01cf8a;
	}

	.naTive {
		bottom: 0;
		position: absolute;
		width: 50rpx;
		height: 10rpx;
		background-color: #01cf8a;
		margin-left: 155rpx;
		border-radius: 20rpx;
	}

	/* 横向滑动 */
	.scroll-view_H {
		padding: 20upx 0 50upx 0;
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item_H {
		display: inline-block;
		padding: 0 20upx;
		text-align: left;
		font-size: 30rpx;
		color: rgba(181, 185, 198, 1);
		margin-right: 20upx;

	}

	.active {
		color: #01cf8a;
	}
</style>
