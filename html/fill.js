const http= require('http');
http.createServer((req,resp)=>{
    resp.write(`
        <form>
        <input type="text placeholder ="Enter name" name ='name' />
         <input type="text placeholder ="Enter email" name ='email' />
        <button>Submit</button>
        
        `);
        resp.end();

}).listen(3200)