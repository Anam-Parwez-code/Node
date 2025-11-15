
const http = require('http');
const fs=require('fs');
const querystring=require('querystring');
http.createServer((req,resp)=>{
  fs.readFile('html/form.html','utf-8',(error,data)=>{
        
      if(error){
         resp.writeHead(500,{"content-type" : 'text/plain'})
          resp.end('Internal server error')
           return;
        }
        if(req.url=='/'){
     resp.write(data);
        }
        else if(req.url=='/submit'){
          let dataBody=[];
          req.on('data',(chunk)=>{ //data is stored in nodejs in form of  chunks
            dataBody.push(chunk);

          });
          req.on('end',()=>{
            let rowdata=Buffer.concat(dataBody).toString();
            let readableData=querystring.parse(rowdata);
            console.log(readableData);
          })
            resp.write('Form submitted')
        }
         resp.end();
    })
   
}).listen(3200)

//const http= require('http');
//h//ttp.createServer((req,resp)=>{
  //  resp.writeHead(200,{ "content-type":'text/html'})
    //console.log(req.url);
    //

    //}
    //else if(req.url=='/submit'){
      //  resp.write('<h1>Form submitted</h1>')
    //}
   
      //  resp.end();

//}).listen(4800)