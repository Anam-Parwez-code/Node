const http=require('http');
const fs=require('fs');
http.createServer((req,resp)=>{
    let collectdata=fs.readFileSync("html/header.html","utf-8",)
   let file="/website";
   if(req.url!='/'){
    file=req.url;

   }
  
        
    if(req.url!='/website.css'){
    fs.readFile("html"+file+".html","utf-8",(error,data)=>{
        if(error){
            resp.writeHead(500,{"content-type":"text/plain"})
            resp.end("internal error");
            return false;
        }
        console.log(collectdata);
        resp.write(collectdata+""+data);
        resp.end();
    })
}
else if(req.url=='/website.css'){
    fs.readFile("html/website.css","utf-8",(error,data)=>{
        if(error){
            resp.writeHead(500,{"content-type":"text/plain"})
            resp.end("css not found here");
            return false;
        }
        resp.writeHead(200,{"content-type": "text/css"})
        resp.end(data);
    })
}
    
}).listen(3200)