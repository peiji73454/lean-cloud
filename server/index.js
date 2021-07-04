const express = require('express')
const app = express()
var port = process.env.PORT || 5000;  //定义端口号
const router=require('./router/index')
const cookieParser=require("cookie-parser");
const bodyParser=require("body-parser");
const morgan=require('morgan')
app.use(cookieParser());

// 使用 body parser 将post参数及URL参数可以通过 req.body或req.query 拿到请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 使用 morgan 将请求日志输出到控制台
// app.use(morgan('dev'));

router.router(app)



app.listen(port, () => {
  console.log("服务开启成功"); //yellow
})
