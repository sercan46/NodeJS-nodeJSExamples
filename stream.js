//Stream'in amacı çok uzun dataları chunklara ayırarak okumayı ve yazmamızı sağlar.
const fs=require('fs');
//Dosyaya Stream okuması veya yazma yapma..
let readStream=fs.createReadStream('./docs/test2.txt',{encoding:'utf-8'});
let writeStream=fs.createWriteStream('./docs/test4.txt');
//Dosyaları stream ile okuyup yazma.
readStream.on('data',(chunk)=>{
    console.log('----YENİ CHUNCK------');
    console.log(chunk);
    writeStream.write(chunk);
})
readStream.pipe(writeStream); //Transfer işlemleri