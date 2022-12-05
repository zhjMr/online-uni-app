<template>
	<view>
		<optionsUser :navData="navData" v-model="from"></optionsUser>
		<button class="buttons">提交</button>
	</view>
</template>

<script>
	//引入目录组件
	import optionsUser from "@/pages/my/components/options.vue"
	//引入编辑资料模拟的数据
	import editPut from "@/config/my/editData.js"
	//引入vuex辅助函数
	import {
		mapState
	} from "vuex"
	export default {
		props: {
			navData: {
				type: Array,
				default: editPut
			}
		},
		components: {
			optionsUser
		},
		data() {
			return {
				from: {
					nickname: ""
				}

			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		onLoad() {
			this.stateAlter()
		},
		methods: {
			stateAlter() {
				this.navData.forEach(item => {
					if (item.title == "手机") {
						item.text = this.userInfo.phone
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.buttons {
		width: 696rpx;
		height: 89rpx;
		margin: auto;
		line-height: 89rpx;
		text-align: center;
		background-color: #5ccc84;
		color: #fff;
		margin-top: 20rpx;
	}
</style>
