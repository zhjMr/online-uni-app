export default () => {
	return [{
			id: "1",
			icon: "iconfont icon-OrderHistory",
			text: "订单",
			isLogin: true,
			page: "/pages/my-muli/order"
		},
		{
			id: "2",
			icon: "iconfont icon-pinglun2",
			text: "消息",
			isLogin: true,
			page: "/pages/my-muli/news"
		},
		{
			id: "3",
			icon: "iconfont icon-shoucang1",
			text: "收藏",
			isLogin: true,
			page: "/pages/my-muli/collect"
		},
		{
			id: "4",
			icon: "iconfont icon-e-learning-monitor",
			text: "在学",
			pages: "/pages/study/study"
		},
	]
}
