import App from './App'
// #ifndef VUE3
import Vue from 'vue'
// 引入 mixins
import mixins from '@/common/mixins/mixins.js'
Vue.mixin(mixins)
// 引入vuex
import store from "@/store/index.js"
// 引入 toast提示
import * as util from '@/common/js/utils.js'
Vue.prototype.$util = util

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
