<template>
	<view>
		<i-no-login v-if="!hasLogin"></i-no-login>
		
	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex"
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapGetters([
				"hasLogin"
			])
		},
		methods: {

		}
	}
</script>

<style>

</style>
