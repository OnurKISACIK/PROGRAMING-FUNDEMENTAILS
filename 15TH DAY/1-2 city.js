//? Object.keys(obj) => Bizlere obejenin icerisindeki anahtar kelimeleri vermekte
//? Object.values(obj) => Bizlere obejenin icerisindeki degerleri vermekte
//? Object.entries(obj) => Bizlere obejenin icerisindeki anahtar ve degerleri birlikte vermekte

/*
function city(obj) {
  for (let el of Object.keys(obj)) {
    console.log(`${el} -> ${obj[el]}`);
  }
}
city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000"
});
*/
let obj = {
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000"
};
let keys = Object.keys(obj);
let values = Object.values(obj);
let entries = Object.entries(obj);
console.log(keys);
console.log(values);
console.log(entries);
