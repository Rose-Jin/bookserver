// 测试express代码: 搭建服务器
const express = require('express')
const app = express()

// node -> http -> post -> 可以处理, 但是很麻烦 
// express -> 基于node -> 本质还是http模块代码
// jq -> 本质js代码

// 可以帮我们接收 content-type: application/x-www-form-urlencoded类型的请求体
// 底层解释:告诉express请求体的处理 使用http模块
// const ? = express.urlencoded({extended: false}) =>  req.body有数据
// app.use(?) // 让整个服务的对应的所有请求都有req.body

// 让req.body有数据的写法 
// 注意: 顺序要放在所有请求的监听之前!!!!!!
app.use(express.urlencoded({extended: false}))
// 客户端 POST 
// http://localhost:3005/api/addbook
app.post('/api/addbook', (req, res) => {
    // post请求的请求体的获取 body
    console.log(req.body); // => 如果想让req.body是请求体数据=>前提,需要通过express进行设置
    /*
     {
        bookname: '一本书',
        author: '作者啊',
        publisher: '出版社'
      }
    */
  // res.send('Hello World!')
  res.send(req.body)
  
})

app.listen(3005, () => {
  console.log(`Run it at http://localhost:3005`)
})



// 提醒: 这里的app.use()的使用的原理不敢解释=> 讲中间件时会解释
// 为了req.body生效 需要提前进行如下设置:(注意位置)
// app.use(express.urlencoded({extended: false}))
