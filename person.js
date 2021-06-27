let name=["Sercan","Enver","Ahmet"];
let age=[23,56,13];

let fonk=()=>{
  return 'Test Fonksiyon'
}
//Değişkenler exports.önTaraftaKullanılacakİsim=Değişken değeri şeklinde tanımlanabilir.
exports.name=name;
exports.yas=age;
//Tüm değişkenler module.exports ile obje içerisinde gönderilebilir.
module.exports={
    name,
    yas:age, //İlk değer kısmı çağırdığımız tarafta hangi isimle ile çağıracağımızı belirtebiliriz.
    fonk
}