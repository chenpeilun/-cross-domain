/*
* @Author: CPL
* cors跨域实现
* @Date:   2019-03-12 17:01:17
* @Last Modified by:   Chen peilun
* @Last Modified time: 2019-03-12 19:54:11
*/

// 实现ajax
function http(options) {
	let methods = options.methods
	let url = options.url

	let xhr = new XMLHttpRequest()
	// cookie不能跨域
	document.cookie = 'name=cpl'
	// 前端设置是否带cookie
	xhr.withCredentials = true

	xhr.open(methods, url, true)
	xhr.setRequestHeader('name', 'cpl')
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
				console.log(xhr.response)
				// 得到响应头，后台需要设置Access-Control-Expose-Headers
				console.log(xhr.getResponseHeader('name'))
			}
		} 
	}
	xhr.send()
}