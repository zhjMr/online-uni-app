<template>
	<view>
		<!-- 轮播图 -->
		<SweiperBanner :BannerList='BannerList'></SweiperBanner>
		<!-- nav导航栏 -->
		<NavBar :iconsNavList="iconsNavList"></NavBar>
		<!-- 优惠券 -->
		<discounts :discountsList="discountsList"></discounts>
		<!-- 拼团 -->
		<groups :groupList="groupList"></groups>
		<!-- 最新列表 -->
		<NewOfList :NewList="NewList" :imageList="imageList"></NewOfList>
	</view>
</template>
<script>
	//引入api
	import IndexApi from "@/api/index.js"
	//引入轮播图组件
	import SweiperBanner from "@/pages/index/compoents/swipr-banner.vue"
	//引入目录nav活动组件
	import NavBar from "@/pages/index/compoents/Nav-bar.vue"
	//引入优惠券组件
	import discounts from "@/pages/index/compoents/i-discount.vue"
	//引入拼团组件
	import groups from "@/pages/index/compoents/i-group.vue"
	//引入最新列表组件
	import NewOfList from "@/pages/index/compoents/i-newView.vue"
	export default {
		components: {
			SweiperBanner,
			NavBar,
			discounts,
			groups,
			NewOfList
		},
		data() {
			return {
				//轮播图数据
				BannerList: [],
				// nav icons数据
				iconsNavList: [],
				// 优惠卷数据
				discountsList: [],
				//拼团数据
				groupList: [],
				//最新数据
				NewList: [],
				//大图
				imageList: ""
			}
		},
		onLoad() {
			//调用首页收据
			this.getIndexList()
			//调用优惠卷数据
			this.getdiscount()
			//调用拼团列表数据
			this.getgroupList()
		},
		methods: {
			//获取首页收据
			async getIndexList() {
				try {
					const response = await IndexApi.getBannerList()
					console.log(response, '首页数据');
					let res = response.data.data
					//取出轮播图数据
					this.BannerList = res[1].data
					// nav icons数据
					this.iconsNavList = res[2].data
					//最新数据
					this.NewList = res[5].data
					//大图
					this.imageList = res[6].data
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
			//获取优惠券数据
			async getdiscount() {
				try {
					const response = await IndexApi.getdiscount()
					// console.log(response, '优惠券');
					this.discountsList = response.data.data
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
			//获取拼团数据
			async getgroupList() {
				try {
					const response = await IndexApi.getgroup()
					console.log(response, '拼团');
					this.groupList = response.data.data.rows
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			}
		}
	}
</script>
<style lang="scss">

</style>
