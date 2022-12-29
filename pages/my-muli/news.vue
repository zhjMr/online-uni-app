<template>
	<view >
		
		<view class="p-2">
			<view v-for="(item,index) in bookList" :key="index" class="bg-white rounded p-2">
				<view>{{item.content}}</view>
				<view class="font-sm text-muted mt-1">{{item.created_time}}</view>
			</view>
		</view>
		
		
		<uni-load-more :status="loadStatus"></uni-load-more>
	</view>
</template>

<script>
	import userApi from "@/api/book.js"
	export default {
		data() {
			return {
				page : 1,
				limit : 10,
				bookList : [],
				loadStatus : 'loading',
				total : 0
			}
		},

		onLoad() {
			this.initLoad()
		},

		onPullDownRefresh() {
			this.initData()
		},
		onReachBottom() {
			if(this.bookList.length >= this.total){
				return
			}
			
			this.page += 1
			this.loadStatus = "more"
			this.initLoad()
		},
		methods: {
			initData(){
				this.page = 1
				this.initLoad()
			},
			async initLoad(){
				try{
					
					const data = {
						page : this.page,
						limit : this.limit
					}
					this.loadStatus = "loading"
					const response = await userApi.getMessageList(data)
					console.log(response);
					this.total = response.data.data.count
					let rows = response.data.data.rows
					
					this.bookList = this.page === 1 ? response.data.data.rows : this.bookList.concat(response.data.data.rows)
					
					this.loadStatus = this.bookList.length !== response.data.data.count  ? "more" :  "nomore"
					
					console.log("response=>", this.bookList)
				}catch(e){
					this.loadStatus = "more"
					if(this.page > 1){
						this.page -= 1
					}
					//TODO handle the exception
					console.log("error=>", e)
				}finally{

					uni.stopPullDownRefresh()
				}
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #eee; 
}
</style>
