// express

const express = require("express");
const app = express();

// 统一配置

// 统一配置body的处理
// 对应content-type: application/x-www-form-urlencoded的请求
app.use(express.urlencoded({extended: false}));
// 对应content-type application/json的请求
app.use(express.json());

// 统一配置静态资源的处理assets
// http://localhost:3009/lib/xxxx
// http://localhost:3009/index.html
app.use(express.static("assets"));

// 核心业务接口
// 查询  GET
app.get("/", (req, res) => {
  res.send("测试接口get-----");
});
// 增加 POST body
app.post("/", (req, res) => {
  res.send("测试接口post-----");
  // res.body
});

// 删除 DELETE
app.delete("/api/book/", (req, res) => {
  res.send("测试接口delete-----");
});

// 修改 PUT
app.put("/", (req, res) => {
  res.send("测试接口put-----");
});

// 统一404处理
app.get("*", (req, res) => {
  res.send("NotFound");
});

app.listen(3009, () => {
  console.log(`Run it at http://localhost:3009`);
});

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
// 9. 检查index.html中的请求(获取GET/删除DELETE/添加POST)

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
