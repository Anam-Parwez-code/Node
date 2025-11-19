//syncchronus operation one task is performed afetr the output of first task has come //slow process
//by default js is synchronus
//asynchronus operation one task is performed before output of first task //fast process
//console.log("Anam");
//let a=60;
//let b=90;
//setTimeout(() => {
  //  console.log("anas");  //ths will make process asynchronus

//}, 500);

//console.log("saman");
const fs=require('fs');
//fs.readFile("text/file.txt","utf-8",(error,data)=>{   //thid commans is asynchronus
  //  if(error){
    //    return false;
    //}
    
      //  console.log(data);

//})
const data=fs.readFileSync("text\file.txt","utf-8");

        console.log(data);
console.log("endgame");