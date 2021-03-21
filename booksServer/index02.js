// express

const express = require('express')
const app = express()

// 统一配置

// 统一配置body的处理
// 对应content-type: application/x-www-form-urlencoded的请求
app.use(express.urlencoded({ extended: false }))
// 对应content-type application/json的请求
app.use(express.json())

// 统一配置静态资源的处理assets
// http://localhost:3009/lib/xxxx
// http://localhost:3009/index.html
app.use(express.static('assets'))

// 模拟真数据(这里先用数组)->其实应该是数据库MySQL
const books = [
  {
    id: 0,
    bookname: '小红书',
    author: 'zs',
    publisher: '中国航头',
  },
  {
    id: 1,
    bookname: '小红书',
    author: 'zs',
    publisher: '中国航头',
  },
  {
    id: 2,
    bookname: '小红书',
    author: 'zs',
    publisher: '中国航头',
  },
]
// 核心业务接口
// 查询  GET
app.get('/api/book', (req, res) => {
  // 根据客户端的使用res的代码设计服务端应该返回的数据结构
  res.send({
    data: books,
  })
})

// 增加 POST body
app.post('/api/book', (req, res) => {
  console.log(req.body) // { bookname: '小绿书', author: '1', publisher: '1' }
  const { bookname, author, publisher } = req.body
  req.body.id = books.length
  // books.push(req.body)
  books.push({
    id: books.length,
    //ES6 展开操作运算符 快速展开容器(对象 or 数组)
    // ...req.body, ...{ bookname: '小绿书', author: '1', publisher: '1' }
    bookname,
    author,
    publisher,
  })
  res.send({
    data: req.body,
  })
})

// 删除 DELETE
app.delete('/api/book/:id', (req, res) => {
  // console.log(req.params.id) // { id: '2' }
  // 从大数组中删除符合条件的元素 (原生js的API数组操作)
  // 大数组books
  // splice(索引,1)
  // 条件: id === 在数组里面找每个元素,元素item.id



  // const temp = -1
  // for (let index = 0; index < books.length; index++) {
  //   if(req.params.id === books[index].id){
  //     temp = index
  //   }
  // }

  // findIndex
  // 0. 作用: 返回符合条件的元素的索引
  // 1. 能遍历
  // 2. 实参是数组的每个元素
  // 3. return boolean id === obj.id
  const ind = books.findIndex((obj)=>{ return req.params.id === obj.id})
  books.splice(ind,1)
  console.log(books)




  res.send('测试接口delete-----')
})
// 修改 PUT
app.put('/', (req, res) => {
  res.send('测试接口put-----')
})

// 统一404处理
app.get('*', (req, res) => {
  res.send('NotFound')
})

app.listen(3000, () => {
  console.log(`Run it at http://localhost:3009`)
})

// 开发流程
// 1. 明确业务(express练习增删改查)
// 2. booksServer项目目录
// 入口index.js
// 3. npm init -y
// 4. npm i express
// 5. 启动服务
// 6. 写基本的配置(body的处理)和接口(4个增删改查 + *)
// 7. 静态资源处理->引入图书管理系统(课程包02文件夹)
// 8. 测试接口->  index.html显示(js和css也生效)
// 9. 检查index.html中的axios请求(获取GET/删除DELETE/添加POST)
// 9.1 请求GET /api/book
// 9.1 响应 {data:[{
// id
// bookname
// author
// publisher
// }]}
// 9.2 请求POST api/book
// 9.2 响应 请求头 TODO(id可能有问题 需要单独处理)
// bookname
// author
// publisher
// 9.2 总结
// 先看index.html的post请求(请求url+请求体)
// 再看index.html的post请求的响应处理>需要后端返回对象
// 来到index.js =>  监听请求 获取body
// 添加: 修改了body的结构(3k-v 添加 id)
// 添加: 修改本地数据books数组(push)
// 返回响应:  res.send({data:req.book})
// 9.3 删除 请求 DELETE /api/book/' + id,
// 9.3 响应 (客户端没处理)
// 





// 小技巧
// 问题1: 终端好多呀 容易目录搞错
// 解决1: 第三方终端 windows conemu64 ->多窗口终端
// 问题2: 接口url是不是怎么写都成? ->都成-> 但不行-> 需前后端开发人员讨论规范
// 解决2: 统一的行业规范 RestFul(建议)

// 小知识
// 1. post能干一切, 只不过做删和改 不专业不合理
// 2. get和post是最低线 (知道区别 携带数据的大小不同 小数据get  大数据post)
// 3. get post put delete
// 4. 所有网站的域名末尾默认/ (其实找的是该url下对应的index.html)
// 5. $.ajax是否可以实现跨域访问 => 可以 jsonp
// 6. axios不支持jsonp请求-> axios + jsonp包
