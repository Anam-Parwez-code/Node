const http =require('http');
http.createServer((req,resp)=>
{
    console.log(req.method);
    if(req.url == "/"){
        resp.write("Home Page")
    }
    else if(req.url== "/login"){
        resp.write("<h1>Login page</h1>")
    }
    else{
        resp.write("Others Pages")
    }
    resp.end();
}
).listen(6707)