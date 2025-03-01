/*
function solve() {
  let obj = {};
  obj.name = "Onur";
  (obj.age = 35), (obj.city = "Sofia");
  obj["hairColor"] = "black";
  console.log(obj);
}
solve();
*/
/*
function personInfo(firstName, lastName, age) {
  let person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age;
  return person;
}
console.log(personInfo("Onur", "Kuru", 40));
*/
//? BOS BIR OBJENIN ICERISNE KEY VE VALUE EKLEDIK
//? VE DAHA SONRA OBJEYI YAZDIRDIK.

/*
function personalInfo(firstName, lastName, age) {
  let person = { firstName: firstName, lastName: lastName, afe: age };
  console.log(person);
}
personalInfo("Deniz", "Havan", 25);
*/
//? BURADA FUNCTION ICINDE OBJE OLUSTURUP RETURN YAPARAK PERSON OLARAK YAZDIRDIK.
//? VE OBJE ICINDEKI KEYLERI VE VALUE LARI DIREK OLARAK YAZABILIRIZ.
//? BUNA OBJECT LITERAL DENIR.

function personInfo(firstName, lastName, age) {
  return { firstName, lastName, age };
}
console.log(personInfo("Ali", "Ata", 24));
//? ORNEKTE GORMUS OLDUGUMUZ GIBI DIREK OLARAK OBLERI RETURN EDEBILIRIZ.
//? BUNUN ICIN FUNCTION ICINDE RETURN YAPMAMIZ GEREKIR.
//? BUNUN ICINDE OBJE OLUSTURUP RETURN EDERIZ.
//? VE OBJE ICINDEKI KEYLERI VE VALUE LARI DIREK OLARAK YAZABILIRIZ.
//? BUNA OBJECT LITERAL DENIR.
