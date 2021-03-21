// 开启服务
const express = require('express')
const app = express()

// GET的查询参数的处理方式
// 客户端的请求,比如  GET http://localhost:3002/test?id=3&bookname=zxx&age=20
// 服务端的监听,   req.query
app.get('/test', (req, res) => {
  // 获取请求对象的数据
  console.log(req.query) // { id: '3', bookname: 'zxx', age: '20' }
  // req.query是对象
  //   res.send("get请求测试")
  res.send(req.query)
})

app.listen(3005, () => {
  console.log(`Run it at http://localhost:3005`)
})

// 客户端的请求
// GET  http://localhost:3003/userinfo/3