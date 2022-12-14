<template>
	<view>
		<uni-swipe-action>
			<uni-swipe-action-item v-for="(item, index) in swipeList" :right-options="item.options" :key="item.id"
				@click="swipeClick($event, index)">
				<view class="content-box">
					<text>{{ item.content }}</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				swipeList: [{
					id: 1,
					options: [{
						text: '删除',
						style: {
							backgroundColor: 'rgb(255,58,49)'
						}
					}],
					content: 'item2'
				}, ]
			};
		},
		methods: {
			swipeClick(e, index) {
               console.log(e);
			}
		}
	};
</script>
<style>
	.content-box {
		flex: 1;
		height: 44px;
		line-height: 44px;
		padding: 0 15px;
		position: relative;
		background-color: #fff;
		border: 1px solid #f5f5f5;
	}
</style>
