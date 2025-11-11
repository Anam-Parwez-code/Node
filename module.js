const fs=require('fs');
fs.writeFileSync("dummy.txt","this is a another file");
const os=require('os');
console.log(os.platform());
console.log(os.hostname());
const {log}=require('console');
log("custom log");