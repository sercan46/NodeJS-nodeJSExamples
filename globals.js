//Tüm elemenleri görmek için global değişkeni konsola atılabilir.(JavaScriptteki window gibi)
console.log(global);

//SetTimeOut fonksiyonu kullanabilir.
setTimeout(()=>{
    console.log('TimeOut');
    clearInterval(interval)
},3000);

//Interval fonksiyonu kullanabilir.
let interval =setInterval(()=>{
    console.log('Interval')
},1000);

//Dosya yolunu verir.
console.log(__dirname);

//Klasör yolunu verir.
console.log(__filename);