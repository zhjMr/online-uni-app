import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import {
	USER_INFO_KEY,
	TOKEN_KEY
} from "@/enum/user-key.js"

const store = new Vuex.Store({
	state: {
		//保存历史记录
		historyword: uni.getStorageSync('historyword') || [],
		// 用户信息
		userInfo: uni.getStorageSync(USER_INFO_KEY) || {},
		// 用户登录token
		accessToken: uni.getStorageSync(TOKEN_KEY) || ""
	},
	getters: {
		// 获取登录的状态
		hasLogin(state) {
			// !! 可以将其他数据类型转化布尔类型
			return !!state.accessToken
		}
	},
	mutations: {
		//搜索历史记录
		historyword(state, data) {
			//new Set去重
			// 历史记录储存vuex
			state.historyword = [...new Set(data)]
			// 历史记录储存本地
			uni.setStorageSync('historyword', [...new Set(data)])

		},
		setToken(state, data) {
			console.log(data, 'data')
			const {
				token,
				username
			} = data
			// 判断用户信息是否有值
			if (data) {
				// 将用户信息存储到vuex
				state.userInfo = data
				// 将用户信息存储到本地
				uni.setStorageSync(USER_INFO_KEY, data)
			}
			// 判断token是否存在
			if (token) {
				// 将token存储到vuex
				state.accessToken = token
				// 将token存储到本地
				uni.setStorageSync(TOKEN_KEY, token)
			}
		},
		//清除历史记录
		historywordClear(state) {
			//青空uex的历史记录
			state.historyword = []
			//清空本地的历史记录
			uni.removeStorageSync('historyword')
		},
		//退出登录
		logout(state) {
			// 清空vuex里面存储的用户信息token
			state.userInfo = {}
			state.accessToken = ""
			// 清空本地存储的用户信息token
			uni.removeStorageSync(USER_INFO_KEY)
			uni.removeStorageSync(TOKEN_KEY)

		}
	},
	actions: {

	},
	modules: {

	}
})

export default store
