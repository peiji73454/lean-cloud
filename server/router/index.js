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
// code == 5002: already login in other place
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
        app.post('/login',function(req,res){
            res.cookie("name",'zhangsan',{maxAge: 900000, httpOnly: true});
            // { username: '18221733710@139.com', password: '1' }
            var user = new User(req.body)
            database.collection("USER").insertOne(req.body, function (err, _res) {
                if (err) throw err;
                let  userInfo=new User(_res.ops.find(item=>item.username===req.body.username))
                if(!userInfo){
                    return res.status(400).json({
                        code: 5004,
                        messaege: 'Invalid User'
                    })
                }
                delete userInfo.password
                userInfo=({...userInfo,accessToken:new Jwt(userInfo._id).generateToken()})
                return res.json({
                    code: 2000,
                    userInfo
                })
            });

        })
        app.get('/foo', function (req, res) {
            dbo.collection("col").find({}).toArray(function (err, result) { // 返回集合中所有数据
                if (err) throw err;
                res.send(result);
                // db.close();
            });
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






