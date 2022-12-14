import request from '@/utils/request.js'

//获取 帖子 
const getBbs =(data)=>{
	return request({
		url:"/mobile/bbs",
		data
	})
}
//获取 帖子数据 
const getPostList =(data)=>{
	return request({
		url:"/mobile/post/list",
		data
	})
}

// 喜欢 帖子 点赞 
const support =(data)=>{
	return request({
		url:"/mobile/post/support",
		method:"POST",
		data
	})
}
// 取消帖子 
const unsupport =(data)=>{
	return request({
		url:"/mobile/post/unsupport",
		method:"POST",
		data
	})
}
// 获取 详情 数据 
const getItme =(data)=>{
	return request({
		url:"/mobile/post/read",
		data
	})
}

// 帖子评论数据 
// /post_comment?post_id=204&page=1

const getPostComment =(data)=>{
	return request({
		url:"/mobile/post_comment",
		data
	})
}

// 新增帖子 
const addSave=(data)=>{
	return request({
		url:"/mobile/post/save",
		method:"POST",
		data
	})
}

// 提交评论 
const getReply=(data)=>{
	return request({
		url:"/mobile/post/reply",
		method:"POST",
		data
	})
}

// 获取 我的帖子 
const getMypost=(data)=>{
	return request({
		url:"/mobile/mypost",
		data
	})
}

// 删除帖子
const deleteList=(data)=>{
	return request({
		url:"/mobile/post/delete",
		method:"POST",
		data
	})
}

export default {
	getBbs,
	getPostList,
	support,
	unsupport,
	getItme,
	getPostComment,
	addSave,
	getReply,
	getMypost,
	deleteList
}