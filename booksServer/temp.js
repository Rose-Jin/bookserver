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

// 模拟数据
const books = [
  {
    id: 0,
    bookname: '三国',
    author: '罗贯中',
    publisher: '20210101',
  },
  {
    id: 1,
    bookname: '红楼',
    author: '罗贯中',
    publisher: '20210101',
  },
  {
    id: 2,
    bookname: '水浒',
    author: '罗贯中',
    publisher: '20210101',
  },
  {
    id: 3,
    bookname: '西游',
    author: '罗贯中',
    publisher: '20210101',
  },
]
// 核心业务接口
// 查询  GET
app.get('/api/book', (req, res) => {
  res.send({
    data: books,
  })
})

// 增加 POST body
app.post('/api/book', (req, res) => {
  const obj = {
    id: books.length,
    ...req.body,
  }
  books.push(obj)
  res.status(201).send({
    status: 0,
    msg: '添加成功',
    data: obj,
  })
})
// 删除 DELETE
app.delete('/api/book/:id', (req, res) => {
  // 找到id在数组里对象的索引
  let ind = books.findIndex((obj) => obj.id == req.params.id)
  books.splice(ind, 1)
  console.log(books)
  res.send({
    msg: '获取成功',
    status: 0,
    data: books,
  })
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
  console.log(`Run it at http://localhost:3000`)
})

// GET http://localhost:3000/api/book
// POST http://localhost:3000/api/book
// bookname
// author
// publisher
