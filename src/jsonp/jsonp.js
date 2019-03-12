/*
* @Author: CPL
* 实现jsonp
* @Date:   2019-03-12 16:05:43
* @Last Modified by:   Chen peilun
* @Last Modified time: 2019-03-12 16:53:09
*/
function jsonp(options) {
	let url = options.url
	let params = options.params
	let callback = options.callback
	// 返回一个promise包装的结果，方便调用时链式调用
	return new Promise((resolve, reject) => {
		// 创建一个script标签
		let script = document.createElement('script')
		// 给window对象增加一个回调函数
		window[callback] = function(data) {
			// 成功则返回data
			resolve(data)
			// 将script标签移除
			document.body.removeChild(script)
		}
		// 将传进来的参数进行处理
		params = {...params, callback}
		let arrs = []
		for (let key in params) {
			arrs.push(`${key}=${params[key]}`)
		}
		// 将处理完的参数变成url后面的参数格式并合成到url后面
		script.src = `${url}?${arrs.join('&')}`
		// 将script标签添加到html页面上
		document.body.appendChild(script)
	})
	
}
	