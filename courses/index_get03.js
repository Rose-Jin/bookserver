const express = require('express')
const app = express()

// GET的动态参数的处理方式
// 客户端的请求,比如  GET http://localhost:3005/test/3
// 服务端的监听,   req.params
// 注意:
// 1. id任意命名, 通常是id
// 2. :语法规定
// 3. 把:id当成函数形参
app.get('/test/:id', (req, res) => {
    // 获取动态路径的参数
    console.log(req.params); // { id: '4' }
  res.send('Hello World!')
})
app.listen(3005, () => {
  console.log(`Run it at http://localhost:3005`)
})


// 业务场景: 写详情页 就是下面的写法
// http://localhost:3005/listArc/detail/3
// http://localhost:3005/listArc/detail/4
// http://localhost:3005/listArc/detail/5
// http://localhost:3005/listArc/detail/6