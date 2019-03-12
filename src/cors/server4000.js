/*
* @Author: CPL
* cors跨域后端配置
* @Date:   2019-03-12 17:18:59
* @Last Modified by:   Chen peilun
* @Last Modified time: 2019-03-12 20:18:25
*/

let express = require('express')
let app = express()
let whitList = ['http://localhost:3000'] // 设置白名单
app.use(function(req, res, next) {
	let origin = req.headers.origin
	if (whitList.includes(origin)) {
		// 设置哪个源可以访问我
		res.setHeader('Access-Control-Allow-Origin', origin)
		// 允许携带哪个头访问我
		res.setHeader('Access-Control-Allow-Headers', 'name')
		// 允许哪个方法访问我
		res.setHeader('Access-Control-Allow-Methods', 'PUT')
		// 允许携带cookie
		res.setHeader('Access-Control-Allow-Credentials', true)
		// 预检的存活时间
		res.setHeader('Access-Control-Max-Age', 6)
		// 允许返回的头
		res.setHeader('Access-Control-Expose-Headers', 'name')
		if (req.method === 'OPTIONS') {
			res.end() // OPTIONS请求不做任何处理
		}
	}
	next()
})

app.put('/getData', function(req, res) {
	console.log(req.headers)
	res.setHeader('name', 'cpl')
	res.end('I love you')
})

app.get('/getData', function(req, res) {
	console.log(req.headers)
	res.end('I love you')
})

app.use(express.static(__dirname))
app.listen(4000)