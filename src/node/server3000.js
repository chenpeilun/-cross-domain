/*
* @Author: CPL
* 代理服务器
* @Date:   2019-03-12 21:15:03
* @Last Modified by:   Chen peilun
* @Last Modified time: 2019-03-12 21:37:18
*/

let http = require('http')
// 1. 接受客户端请求
const server = http.createServer((request,response) => {
	// 代理服务器直接和浏览器进行交互，需要设置CORS的首部字段
	response.writeHead(200, {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Headers': 'Content-Type'
	})

	// 2. 请求转发
	const proxyRequest = http.request(
	{
		host: '127.0.0.1',
		port: 4000,
		url: '/',
		method: request.method,
		headers: request.headers
	},
	serverResponse => {
		// 3. 收到服务器的响应
		var body = ''
		serverResponse.on('data', chunk => {
			body += chunk
		})
		serverResponse.on('end', () => {
			console.log('The data is' + body)
			// 4. 将响应结果转发给浏览器
			response.end(body)
		})
	}).end()
})

server.listen(3000, ()=> {
	console.log('http://localhost:3000 start success!')
})

