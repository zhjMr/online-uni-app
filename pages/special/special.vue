<template>
	<view class="i-clurse">
		<view class="courseList" v-for="(item,index) in specialList" :key="index">
			<view class="iamg">
				<image :src="item.cover" mode=""></image>
			</view>
			<view class="texte">
				<view class="title">
					{{item.title}}
				</view>
				<view class="sprice">
					<text>￥{{item.price}}</text>
					<text>￥{{item.t_price}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//引入api
	import specialApi from "@/api/navBack.js"
	export default {
		data() {
			return {
				specialOnject: {
					page: 1,
					limit: 10
				},
				specialList: []
			}
		},
		onLoad() {
			//调用专栏列表数据
			this.getSpecilList()
		},
		methods: {
			//获取专栏列表数据
			async getSpecilList() {
				try {
					const response = await specialApi.getColum(this.specialOnject)
					console.log(response, '专栏列表');
					this.specialList = response.data.data.rows
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="scss">
	.i-clurse {
		.courseList {
			margin-top: 40rpx;
			display: flex;
			padding: 0 20rpx;

			.iamg {
				width: 300rpx;
				height: 170rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.texte {
				margin-left: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				text:nth-child(1) {
					font-size: 40rpx;
					color: #e3606c;
					width: 100px;
					overflow: hidden; //超出隐藏
					white-space: nowrap; //不折行
					text-overflow: ellipsis; //溢出显示省略号

				}

				text:nth-child(2) {
					font-size: 20rpx;
					color: #666;
				}
			}
		}
	}
</style>
