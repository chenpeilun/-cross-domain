/*
* @Author: CPL
* 服务器
* @Date:   2019-03-12 21:15:12
* @Last Modified by:   Chen peilun
* @Last Modified time: 2019-03-12 21:31:09
*/

const http = require('http')
const data = {title: 'cpl', password: '123456'}
const server = http.createServer((request, response) => {
	if (request.url === '/') {
		response.end(JSON.stringify(data))
	}
})
server.listen(4000, ()=> {
	console.log('http://localhost:4000 start success')
})