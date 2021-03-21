// 检查index.html里面的axios请求，获得get信息

const express = require("express");
const app = express();
app.use(express.urlencoded({extended: false}));
// 对应content-type application/json的请求
app.use(express.json());
app.use(express.static("assets"));
const books = [
  {
    id: 0,
    bookname: "小红书",
    pushlisher: "中国航头",
    author: "zs",
  },
  {
    id: 1,
    bookname: "小红书",
    pushlisher: "中国航头",
    author: "zs",
  },
  {
    id: 2,
    bookname: "小红书",
    pushlisher: "中国航头",
    author: "zs",
  },
];
// 查询get
app.get("/", function (req, res) {
  res.send({data: books});
});
app.post("/api/book", () => {
  books.push({
    id: books.length,
    bookname,
    author,
    publisher,
  });
  res.send({data: req.body});
});
app.delete("/api/book/:id", () => {
  const ind = books.findIndex((obj) => req.params.data === obj.id);
  books.splice(ind, 1);
  res.send({
    code: 2,
    message: "删除成功",
    data: books,
  });
});
app.put("/api/book", (req, res) => {
  res.send("测试接口put");
});
app.get("*", (req, res) => {
  res.send("not found");
});

// 增加post
app.listen(3000, () => {
  console.log(`run it at localhost:3000`);
});
