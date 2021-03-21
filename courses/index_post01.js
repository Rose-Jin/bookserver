// 测试express代码: 搭建服务器
const express = require('express')
const app = express()

// post
// 客户端 POST http://localhost:3005/api/addbook
// 服务端 POST 
app.post('/api/addbook', (req, res) => {
  res.send('Hello World!')
})

app.listen(3005, () => {
  console.log(`Run it at http://localhost:3005`)
})

// 扩展1 以下请求应该使用的场景是什么?
// 1. GET: 获取数据/查询数据 => 查
// 2. POST: 增加/编辑/删除 => 

// 扩展2 请求方式有几种?
// 一共8种请求方式, 其中常见的是4种, 最常用的是2种(GET/POST)
// 增 => POST
// 删 => DELETE
// 改 => PUT
// 查 => GET 

