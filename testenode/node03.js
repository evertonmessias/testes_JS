var http = require('http');

http.createServer(function(req,res){
    res.send("<h1>Ola</h1>");
}).listen(80800);

console.log('O servidor está On-Line');