const fs=require('fs');

const operation=process.argv[2];
//if (operation=='write'){
  //  const name=process.argv[3];
    //const content = process.argv[4];
    //console.log(operation,name,content);
    //const fullname="files/"+name+".txt"
      // fs.writeFileSync(fullname,content)
//}
 if(operation=='delete'){
    const name=process.argv[3];
    //const content = process.argv[4];
    const fullname="files/"+name+".txt"
    fs.unlinkSync(fullname);
   

}
//fs.writeFileSync("files/apple.txt","This is Anam Parwez");
//const data =fs.readFileSync("files/apple.txt","utf-8");
//console.log(data);
//fs.appendFileSync("files/apple.txt","And I am  working in saudi as software engineer from 2028")