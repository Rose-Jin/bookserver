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
app.use(express.static("assets"));

// 模拟真数据(这里先用数组)->其实应该是数据库MySQL
const books = [
  {
    id: 0,
    bookname: "小红书",
    author: "zs",
    publisher: "中国航头",
  },
  {
    id: 1,
    bookname: "小红书",
    author: "zs",
    publisher: "中国航头",
  },
  {
    id: 2,
    bookname: "小红书",
    author: "zs",
    publisher: "中国航头",
  },
];

// 核心业务接口
// 查询  GET
app.get("/api/book", (req, res) => {
  // 根据客户端的使用res的代码设计服务端应该返回的数据结构
  res.send({
    data: books,
  });
});

// 增加 POST body
app.post("/api/book", (req, res) => {
  // console.log(req.body)
  // 获取请求体数据
  const {bookname, author, publisher} = req.body;
  // 动态给数据添加id属性值(因为books数组的每个对象都有id)
  req.body.id = books.length;
  // 向后台数据books中追加新数据
  books.push({
    id: books.length,
    bookname,
    author,
    publisher,
  });
  // 返回响应
  res.send({
    data: req.body,
  });
});

// 删除 DELETE
app.delete("/api/book/:id", (req, res) => {
  // 获取符合条件的元素的索引
  const ind = books.findIndex((obj) => req.params.id === obj.id);
  // 从数组中移除元素
  books.splice(ind, 1);
  res.send({
    code: 2,
    message: "删除成功",
    data: books,
  });
});

// 修改 PUT
app.put("/", (req, res) => {
  res.send("测试接口put-----");
});

// 统一404处理
app.get("*", (req, res) => {
  res.send("NotFound");
});

app.listen(3000, () => {
  console.log(`Run it at http://localhost:3000`);
});
