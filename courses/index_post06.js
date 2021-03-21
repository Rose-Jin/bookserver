const express = require('express')
const app = express()

const multer = require('multer')
// 配置插件:
// dest:uploads/ => 将来客户端上传后服务器保存该文件的路径(文件夹)
const upload = multer({ dest: 'uploads/' })

// 下面的代码
// 1. 指定将来客户端上传图片时的文件前缀
// 2. 将upload的配置与当前的post请求产生联系
app.post('/test', upload.single('cover_img'), (req, res) => {
  // req.body =>  express框架提供的语法 (node没有这个语法)
  // req.file => multer第三方包提供的(node没有这个语法)
  console.log(req.body, req.file)
  res.send('ok')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(3007, () => {
  console.log(`Run it at http://localhost:3007`)
})



// 提示: (千万别记第三方包的代码, 需要记住有这个么一个包multer能做formData的处理)

// 学编程写业务 很像学数学
// 1. 天才
// 2. 正常人(公式全记住 + 书本例题) => 数学能学好 (考试新题)
// => 学编程写业务
// 1. 天赋
// 2. 正常人(基础语法和API + 老师上课写的案例)  => 再自己写业务

// post 请求body
// 有印象,能对应,常用的1-2-3
// 1.
// content-type: application/x-www-form-urlencoded
// app.use(express.urlencoded({extended: false}))

// 2.
// content-type application/json
// app.use(express.json())

// 3. 
// 文件上传formdata
// multer