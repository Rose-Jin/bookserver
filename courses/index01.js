const express = require("express");
const app = express();

// 让express框架统一处理服务器的静态资源(html/css/js/png等)
// 这里的静态资源都在 "静态资源"文件夹下

// 目的: 让客户端有权限访问"静态资源"文件夹下的所有文件

// app.use()让app对象使用这个功能
// express 统一设置静态资源的写法 static("需要暴露的文件夹名字 路径")
// 结果: 客户端 =>get http://localhost:3005/静态资源/js/clock.js 请求
// 规范: 服务端的静态资源文件夹 , 通常命名为 assets/
app.use(express.static("静态资源"));
app.use(express.static("assets"));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.listen(3005, () => {
  console.log(`Run it at http://localhost:3005`);
});
