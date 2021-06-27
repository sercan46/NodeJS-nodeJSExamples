const http=require('http');
const fs =require('fs');
const _=require('lodash');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');
    // res.write('</head><title>Node Js Eğitim</title></head>')
    // res.write('<h1>Merhaba</h1>');
    // res.end();
    let path="./views/"
    switch(req.url){
        case '/':
            path+='index.html'
            res.statusCode=200
            break;
        case '/about':
            path+='about.html'
            res.statusCode=200
            break;
        case '/about-us':
            res.statusCode=301
            res.setHeader('Location','/about')
            break;
        default:
            path+='404.html'
            res.statusCode=404
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.error(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
});
server.listen('3000','localhost',()=>{
    console.log('3000 portu dinleniyor...')
})

let nums= [23,15,89,47];
_.forEach(nums,(val,key)=>{
    console.log(val,key);
});
let random=_.random(0,20);
console.log(random);
let greeting=_.once(()=>{
    console.log('Merhaba');
})
greeting();
greeting();