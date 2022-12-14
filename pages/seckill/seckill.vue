<template>
	<view>
		<view class="group">

			<view class="grouplist" v-for="(item,index) in groupList" :key="index" @click="handleChangeNew(item)">
				<view class="images">
					<view class="autoView" v-if="item.type=='video'">视频</view>
					<view class="autoView" v-if="item.type=='media'">图文</view>
					<view class="autoView" v-if="item.type=='column'">专栏</view>
					<view class="autoView" v-if="item.type=='audio'">音频</view>
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="text">
					{{item.title}}
				</view>
				<view class="price">
					<text>秒杀价￥{{item.price}}</text>
					<text>￥{{item.t_price}}</text>
				</view>
			</view>

		</view>
		<view class="eee">
			没有更多数据了
		</view>
	</view>
</template>

<script>
	//引入api 
	import groupApi from "@/api/group.js"
	export default {
		data() {
			return {
				groupList: [],
				fromObject: {
					page: 1,
					limit: 10,
					usable: 1
				}
			}
		},
		onLoad() {
			this.getgroupList()
		},
		methods: {
			//获取拼团组件接口
			async getgroupList() {
				try {
					const response = await groupApi.getflashsale(this.fromObject)
					// console.log(response, '秒杀');
					this.groupList = response.data.data.rows
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
			//点击拼团列表触发的事件
			handleChangeNew(item) {
				if (item.type == "column") {
					this.navTo(`/pages/column/column?id=${item.id}&group_id=${item.group_id}`)
				} else {
					this.navTo(`/pages/course/course?id=${item.id}&group_id=${item.group_id}`)
				}

			}
		}

	}
</script>

<style lang="scss">
	.eee {
		padding: 30rpx;
		text-align: center;
		color: #666;
	}

	.group {

		margin-top: 10rpx;
		display: flex;
		flex-wrap: wrap;

		.grouplist {
			width: 343rpx;
			height: 320rpx;
			// background-color: pink;
			margin-left: 20rpx;

			.images {
				position: relative;
				width: 343rpx;
				height: 192rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.text {
				font-size: 36rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}

			.price {
				width: 100%;
				overflow: hidden; //超出隐藏
				white-space: nowrap; //不折行
				text-overflow: ellipsis; //溢出显示省略号

				text:nth-child(1) {
					color: #d96e78;
				}

				text:nth-child(2) {
					font-size: 16rpx;
					color: #666;

				}
			}
		}
	}

	.autoView {
		font-size: 16rpx;
		padding: 5rpx;
		background-color: rgba(0, 0, 0, 0.3);
		position: absolute;
		color: #fff;
		bottom: 10rpx;
		z-index: 999;
		right: 10rpx;
	}
</style>
