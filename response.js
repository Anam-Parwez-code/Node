const http=require('http');
const servers= http.createserver((req,resp)=>{
    resp.SetHeader("Content-Type","text/html");
    resp.write(`
        <html>
            <head>
                <body>
                    <h1>Hello Anam parwez</h1>
                </body>
            </head>
        </html>
`)
    resp.end();
})
servers.listen(4800)
