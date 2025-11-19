const http =require('http');
const userform= require('./userform');
const userdata= require('./userdata');
http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":'text/html'})
    if(req.url=='/'){
  userform(req,resp)
    }
   else if(req.url=='/submit'){
    userdata(req,resp)
   }
  
    resp.end();
}).listen(4200)