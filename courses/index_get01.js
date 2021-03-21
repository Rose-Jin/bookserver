// 开启服务
const express = require('express')
const app = express()
// 监听请求方式为GET 请求路径为默认的/  的客户端请求
// req: 请求对象  res: 响应对象
// res.send()
// 1. send的作用和end很像 (返回数据&&结束响应)
// 2. send方法比end强大 (自带转码utf-8, 支持多种数据的返回, 比如字符串,比如对象!!)
app.get('/', (req, res) => {
  //   res.send('返回啦')
  res.send({
    code: 1,
    message: '请求首页成功',
    status: 200,
    data: [{ name: '娃娃', price: 10000 }],
  })
})
app.get('/user', (req, res) => {
  res.send('请求成功获取用户信息')
})
app.get('/user/zs', (req, res) => {
  res.send('请求成功获取用户信息-zs')
})
// WARNING____注意代码位置 放最后!!!
app.get('*', (req, res) => {
  res.send('NotFound')
})
app.listen(3005, () => {
  console.log(`Run it at http://localhost:3005`)
})

// ajax 结构JSON
// {
//     code:1,
//     status:200,
//     data:[]
// }


// 小结
// 1. 服务端的监听 从上到下按照条件+顺序 进行的
// 2. *匹配所有 (放在最后) => 404


