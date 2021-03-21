const express = require('express')
const app = express()



// app.use()让app对象使用这个功能
// express 统一设置静态资源的写法 static("需要暴露的文件夹名字 路径")
// 结果: 客户端 =>get http://localhost:3005/public/js/clock.js 请求
// 规范: 服务端的静态资源文件夹 , 通常命名为 assets/

// 实参1: 希望客户端请求静态资源时,加的路径前缀
// 实参2: 统一公开暴露的静态资源文件夹
// 结果: 客户端 =>get http://localhost:3005/public/js/clock.js 请求

// 公开多个静态资源文件夹
http://localhost:3005/public/js/clock.js
app.use("/public", express.static("public"))
http://localhost:3005/assets/js/clock.js
app.use("/assets", express.static("assets"))

// app.use(express.static("静态资源")); 

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.listen(3005, () => {
  console.log(`Run it at http://localhost:3005`)
})




// > 柯南 狄仁杰 死亡笔记 撸猫 
// > 搞比利
// What
// Why
// Who
// Where
// How
// 思维模型4W1H
// eg:
// 用cb举例4W1H的应用=> 
// 函数
// 异步没结果
// 函数归属于谁? 对象
// 在哪个文件用 在某个文件的什么位置(拦截器)
// How 语法 规定 步骤


// mac slotlight
// windows->全局搜索->
// 1. everything(软件) + wox
// 2. to涛涛()




