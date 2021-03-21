// 测试express代码: 搭建服务器
// 1. 导入express
const express = require("express");
// 2. 创建服务 相当于http.createServer()
const app = express();

// 3. 监听请求 (监听get 的  /  的 请求)
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// 4. 监听端口
app.listen(3005, () => {
  console.log(`Run it at http://localhost:3005`);
});
