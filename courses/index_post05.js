const express = require('express')
const app = express()

// 监听客户端发送的post请求
// 请求的类型 content-type application/json

// 服务端对应的处理
app.use(express.json())


app.post('/api/addbook', (req, res) => {
  // { bookname: '一本书', author: '作者啊', publisher: '出版社' }
  console.log(req.body); 
  res.send('Hello World!')
})
app.listen(3005, () => {
  console.log(`Run it at http://localhost:3005`)
})


// 扩展
// axios基本使用
// axios({
//   method:'post',
//   url,
//   data:{

//   }
// })


// 请求的tools: axios<- $.ajax <- ajax xhr
// 服务器竟然可以发请求, 可以使用axios
// 请求拦截器->统一设置请求头等
