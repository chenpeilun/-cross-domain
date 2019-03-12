/*
* @Author: CPL
* 利用express实现后端
* @Date:   2019-03-12 16:06:09
* @Last Modified by:   Chen peilun
* @Last Modified time: 2019-03-12 16:54:35
*/

// 引入express模块
let express = require('express')
let app = express()
// 新建一个接口，处理jsonp请求的参数，并进行返回
app.get('/say', function(req, res) {
	let {
		wd,
		callback
	} = req.query

	console.log(wd)
	console.log(callback)
	// 处理完返回的数据
	res.end(`${callback}('CPL')`)
})
// 开启一个端口为3000的服务器
app.listen(3000)