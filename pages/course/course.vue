<template>
	<view>
		<view class="iamg">
			<image src="../../static/demo/cover/1.png" mode=""></image>
		</view>
		<view class="right">
			<view class="box">
				<view class="title">
					VUEcIL实战在线教育后台管理系统
				</view>
				<view class="text">
					2人学过
				</view>
				<view class="price">
					<text class="boxRed">￥9.98</text>
					<text class="Linhige">￥20.00</text>
				</view>
			</view>
			<view class="store">
				<uni-icons type="star" size="30"></uni-icons>
			</view>
		</view>
	</view>

</template>

<script>
	//引入api
	import courseApi from "@/api/search.js"
	export default {
		data() {
			return {
				id: 0,
				column_id: 0,
				group_id: 0,
				flashsale_id: 0,
			}
		},
		onLoad(options) {
			this.id = options.id
			//调用课程详情列表数据
			this.getCourseList()
		},
		methods: {
			//获取课程详情列表数据
			async getCourseList() {
				try {
					let {
						id,
						column_id,
						group_id,
						flashsale_id
					} = this
					const response = await courseApi.getcourse({
						id,
						column_id,
						group_id,
						flashsale_id
					})
					console.log(response, '课程详情列表数据');
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="scss">
	.iamg {
		width: 100%;
		height: 422rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.right {
		display: flex;
        align-items: center;
		.box {

			padding: 0 30rpx;

			.title {
				font-size: 38rpx;
				padding: 20rpx 0;

			}
			.text {
				color: #c3c2bd;
			}
			.price {
				padding: 20rpx 0;
               .boxRed{
				   font-size: 40rpx;
				   
			   }
				.Linhige {
					text-decoration: line-through;
				}

			}
		}
	}
</style>
