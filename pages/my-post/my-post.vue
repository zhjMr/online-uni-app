<template>
	<view>
		<!-- 帖子 -->
		<bbs-item v-for="(item,index) in list" :key="index" :item="item" :mypost="true" @gitList="gitList"> </bbs-item>
		<uni-load-more :status="moreStatus"></uni-load-more>
	</view>
</template>

<script>
	import bbsApi from "@/api/bbs.js"

	import bbsItem from "@/pages/bbs/components/bbs-item.vue"
	export default {
		components: {
			bbsItem
		},
		data() {
			return {
				data: {
					page: 1,
					limit: 5
				},
				moreStatus: "loading",
				list: []
			};
		},
		onReachBottom() {
			if (this.moreStatus !== 'more') {
				return
			}
			this.data.page += 1
			this.gitList()
		},
		onLoad() {
			this.gitList()
		},
		methods: {
			async gitList() {
				let res = await bbsApi.getMypost(this.data)
				console.log(res)
				if (res.data.code == 20000) {
					this.list = this.data.page == 1 ? res.data.data.rows : this.list.concat(res.data.data.rows)
					this.moreStatus = res.data.data.rows.length < 5 ? "noMore" : "more"
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
