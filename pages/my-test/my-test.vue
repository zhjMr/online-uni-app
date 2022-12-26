<template>
	<view>

		<testItem v-for="(item,index) in list" :key="index" :item="item"></testItem>
		<uni-load-more :status="moreStatus"></uni-load-more>
	</view>
</template>

<script>
	import testListApi from "@/api/testList.js"
	import testItem from "@/pages/my-test/components/testItem.vue"
	export default {

		components: {
			testItem
		},
		data() {
			return {
				data: {
					page: 1,
					limit: 5,
				},
				list: [],
				moreStatus: "loading",
			};
		},
		onReachBottom() {
			if (this.moreStatus !== 'more') {
				return
			}
			this.data.page += 1
			this.getList()
		},
		created() {
			this.getList()
		},
		methods: {
			async getList() {
				let res = await testListApi.getUserTest(this.data)
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
