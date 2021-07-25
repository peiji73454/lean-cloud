const fs = require('fs')
var path = require('path'); // 引入路由模块
const jwt = require('jsonwebtoken');
const User=require('./user')
const Jwt=require('./Jwt')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018/";
// TODO MongoError: there are no users authenticated
// code == 2000: success
// code == 5001: invalid access token
// code == 5002: already Console in other place
// code == 5003: access token expired
// code == 5004: invalid user (user not exist)
// code == 5005: username or password is incorrect


exports.router = function (app) {

    MongoClient.connect(url, function (err, mongodb) {
        if (err) throw err;
        var database = mongodb.db("leancloud");
        var myobj = {name: "菜鸟教程", url: "www.runoob"};


        // app.get('/insert', function (req, res) {
        //     database.collection("site").insertOne(myobj, function (err, res) {
        //         if (err) throw err;
        //         console.log("文档插入成功");
        //         database.close();
        //     });
        // })
        app.post('/register',async function(req,res){
           const storedUser= await database.collection("USER").find({}).toArray()// 返回集合中所有数据
            const userInfo=storedUser.find(item=>item.username===req.body.username)
            if(userInfo){
              return  res.status(401).json({
                            code: 5004,
                            messaege: '已注册，请去登录'
                        })
            }else{
                database.collection("USER").insertOne(req.body)
                let  {userId}=new User(req.body)
                const jwt=new Jwt(userId)
                const accessToken=jwt.generateToken()
                res.cookie("accessToken",accessToken,{maxAge: 900000, httpOnly: true});
                return res.json({
                    code: 2000,
                    message:'注册成功'
                })
            }
        })

        app.post('/login',async function(req,res){

            const user=new User(req.body)
            const storedUser= await database.collection("USER").find({}).toArray()// 返回集合中所有数据
            const userInfo=storedUser.find(item=>item.username===user.username&&item.password===user.password)
                if(userInfo){
                    const jwt=new Jwt(user.userId)
                    const accessToken=jwt.generateToken()
                    res.cookie("accessToken",accessToken,{maxAge: 900000, httpOnly: true});
                    return res.json({
                        code: 200,
                        message:'登录成功',
                        data:user
                    })
                }else{
                    return res.status(200).json({
                        code: 401,
                        message:'用户不存在，请先注册'
                    })
                }

        })

        app.get('/userInfo', async function (req, res) {
            const userId= new Jwt().verifyToken(req.cookies.accessToken)
            if(!userId){
                return res.status(401).json({
                    code:5001,
                    message:'invalid access token',
                })
            }
            const storedUser= await database.collection("USER").find({}).toArray()// 返回集合中所有数据
            const userInfo=storedUser.find(item=>item.username===req.body.username)
                return res.json({
                    code: 2000,
                    data:userInfo
                })
        })
    });

    app.get('/static', function (req, res) {
        res.send(fs.readFileSync(__dirname + '/../static/night.jpg'))
    })




    app.get('/night', function (req, res) {
        //第一个参数是下载的资源的url,第二个参数binary(以二进制输出到浏览器，浏览器能自动解析)，如果是图片必须设置成binary，否则图片打不开
        // 如果是hex（以16进制输出到浏览器，在浏览器显示的是16进制字符串）
        //第三个参数是回调函数，data是读取的数据
        fs.readFile(__dirname + '/../static/night.jpg',"binary",function(err,data){
            if(err){
                console.log(err);
                return;
            }else {
                res.write(data,"binary");
                res.end("");
            }
        });
    });
};






