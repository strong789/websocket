var express = require('express'), //引入express模块
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server); //引入socket.io模块并绑定到服务器
var  ejs = require('ejs');
var path = require('path');
var http = require('http');
var routes = require('./routes/index');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');// app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
    //创建一个服务器
//  server = http.createServer(function(req, res) {
//      res.writeHead(200, {
//          'Content-Type': 'text/plain'
//      });
//      res.write('hello world!');
//      res.end();
//  });
routes(app);
server.listen(3002);
console.log('server started');



//socket部分
io.on('connection', function(socket) {
    //接收并处理客户端发送的foo事件
    socket.on('foo', function(data) {
        //将消息输出到控制台
        console.log(data);
    })
});