// Operation System'i projeye import ediyoruz
const os =require('os');
console.log(os);
// OS platform ve homedir fonksiyonları kullanılıyor.
console.log(os.platform(),os.homedir());
// Dosya işlemleri için File System sisteme eklenmesi.
const fs = require('fs');
// Dosya Okuma
fs.readFile('./docs/test.txt',(err,data)=>{
    if(err)throw err;
    console.log('data',data.toString()) // Buffer to string
})
//Dosyaya yazma
fs.writeFile('./docs/test2.txt','Selam test',(err)=>{
    if(err)throw err;
    console.log('Yazma başarılı')
})
// Klasör oluşturma
if (!fs.existsSync('./assets')) {//Eğer klasör yok ise...
    //mkdir ile oluştur
    fs.mkdir('./assets', (err) => {
        if (err) throw err;
        console.log('Klasör başarıyla oluştu');
    })
} else {
    //Var ise rmdir ile klasörü sil
    fs.rmdir('./assets', (err) => {
        if (err) throw err;
        console.log('Klasör başarıyla silindi')
    })
}
// Dosya silme işlemleri yapılan fonksiyon
fs.unlink('./docs/test2.txt',(err)=>{
    if(err) throw err;
    console.log('Dosya silindi')
})

