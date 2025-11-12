const http = require('http');
const userData=[
    {
        name:'Anam',
        age:30,
        email:'anamparwez18@gmail.com'
    },
        {
        name:'Saman',
        age:20,
        email:'anamparwez18@gmail.com'
    },
        {
        name:'Anas',
        age:10,
        email:'anamparwez18@gmail.com'
    }
]
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type",'application/json')
    resp.write(JSON.stringify(userData));
    resp.end();

}).listen(6200)