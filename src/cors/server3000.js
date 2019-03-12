/*
* @Author: CPL
* 3000端口开启页面向4000端口发起请求
* @Date:   2019-03-12 17:01:55
* @Last Modified by:   Chen peilun
* @Last Modified time: 2019-03-12 20:08:06
*/

let express = require('express')
let app = express()
// 将静态文件目录设置为： 项目根目录
app.use(express.static(__dirname))

app.listen(3000)