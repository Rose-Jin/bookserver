var express = require("express");
var app = express();
var multer = require("multer");
var upload = multer({dest: "uploads/"});

app.post("/test", upload.single("cover_img"), (req, res) => {
  //   req.body;
  //   req.file;
  res.send("ok");
});
app.get("/", (req, res) => {
  res.send("hello,world");
});
app.listen(3008, () => {
  console.log(`run it at localhost:3008`);
});
