// PUSH() ->ADD TO END OF THE ARRAY OR RETURN THE LENGTH OF THE ARRAY
// ("".... ANY " MEANS THAT WE CAN ADD MORE THAN 1 OR 2 ELEMENT)

// POP() -> TAKE THE LAST ELEMENT FROM ARRAY AND RETURN THIS ELEMENT //ALSO IF TRANSFER THE ARRA

// UNSHIFT()-> ADD THE BEGGINING
// SHIFT()-> REMOVE FROM THE BEGGINING
// INCLUDES() -> LOOK FOR THE VALUE
// INDEXOF() -> FIND THE INDEX OF VALUE

/*
let array = [1, 2, 3, 4];
let be = array.push("onur");
let ce = array.push("alex");
console.log(array);

*/
// ASAGIDAKI GIBI YAPARSAK MASIVIN SONUNA NUMARALARI EKLER
function a(num) {
  num.push(1, 5, 6, 8);
  console.log(num);
}
a(["Onur", "Ayse", "Osman"]);

// ASAGIDAKI GIBI ATARSAK ARRAYIN TOPLAM INDEXIN UZUNLUGUNU DONDURUR
function b(num) {
  let newArr1 = num.push(1, 5, 6, 8);
  console.log(newArr1);
}
b(["Onur", "Ayse", "Osman"]);

// ASAGIDAKI GIBI GIRILDIGINDE SON INDEXTEKI ELEMNTI ALIP DONDURUR
function c(num) {
  console.log(num.pop()); //?
  // EGER YUKARIDAKI ORNEKTE OLDUGU GIBI SON ELEMNTI ALMISSA ICINDEN
  // BU NOKTADA ARRAYIN UZUNLUGUNU YUKARIDA ALMIS ISE VE ESKI ARRAYI YENIDEN CAGIRIR ISEK
  //  ARRAYIN ICERISINDEKI KALAN ELEMENLAR DONER
  console.log(num); //?[1, 2, 3, 4, 5, 6, 7, 8]
}
c([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// ASAGIDAKI GIBI BIR VARIABLE ATAMIS ISEK ARRAYI VE VARIABLE I YAZDIRIR ISEK
// VARIABLEIN ICERISINDEKI ELEMAN SAYISINI DONER
function exmp3(arr) {
  let varib = arr.pop();
  console.log(varib);
}
exmp3([1, 2, 3, 4, 5]);

// pop() ASAGIDAKI GIBI BOS BIR ARRAY VARSA BU NOKTADA UNDEFINED OLARAK DONER
function d(num) {
  console.log(num.pop());
}
d([]);

// ASAGIDAKI UNSHIFT KULLANDIGIMIZDA GIRILDIGINDE "KISA " YI BASA EKLER
function meth(arr) {
  arr.unshift("Kisa");
  console.log(arr);
  // SHIFT METHODUNU KULLANDIGIMIZDA ISE BASTAKI ELEMENTI KALDIRIR.
  arr.shift();
  console.log(arr);
}
meth(["Onur"]);

function exmp3(arr) {
  let varib = arr.pop();
  console.log(varib);
}
exmp3([1, 2, 3, 4, 5]);
