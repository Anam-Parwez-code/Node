const http = require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>This is Anam Parwez</h1>");
    resp.end("Hello");
}).listen(4800);