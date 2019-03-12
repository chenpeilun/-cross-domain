/*
* @Author: CPL
* 返回a网页
* @Date:   2019-03-12 20:34:05
* @Last Modified by:   Chen peilun
* @Last Modified time: 2019-03-12 20:36:06
*/

let express = require('express')
let app = express()

app.use(express.static(__dirname))

app.listen(3000)