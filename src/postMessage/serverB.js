/*
* @Author: CPL
* 返回B网页
* @Date:   2019-03-12 20:34:53
* @Last Modified by:   Chen peilun
* @Last Modified time: 2019-03-12 20:36:45
*/

let express = require('express')
let app = express()

app.use(express.static(__dirname))
app.listen(4000)