/*function mathPower(num, power) {
  console.log(Math.pow(num, power));
}
mathPower(2, 3);*/

// ASAGIDAKI ILK CONSOLE LOG FONKSIYONDAN GELEN DEGERI DONDURMEKTE AMA BU FONKSIYONDAN GELEN DEGER DEGEIL
// IKINCI CONSOLE LOG ISE UNDEFINED CUNKU CUNKU FONKSIYONDAN GELEN DEGER BU
// RETURN KULLANMAMIZIN NEDENI BURADA FONKSIYONU DURDURARAK BURADAKI FONKSIYONDAN GELEN DEGERI ALMAK
// RETURNNU SILERSEK IKI TANE CIKTI ALIRIZ
// GELEN SAYI VE UNDEFINED
/*
function mathPower(num, power) {
  return console.log(Math.pow(num, power));
}
console.log(mathPower(2, 3));
*/
function mathPower(num, power) {
  return Math.pow(num, power);
}
console.log(mathPower(2, 3));
