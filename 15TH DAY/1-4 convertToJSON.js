function convertToJSON(name, lastName, color) {
  let obj = {};
  obj.name = name;
  obj.lastName = lastName;
  obj.hairColor = color;

  let final = JSON.stringify(obj);
  console.log(final);
  //let final1 = JSON.parse(final);
  //console.log(final1);
  //JSON.parse changing the string to object
  //JSON.stringify changing the object to JSON string
}
convertToJSON("George", "Jones", "Brown");

/*
let neededKey = "firstName";
let personalnfo = { firstName: "Denis", lastName: "Berkamps", age: 20 };
personalnfo.firstName = "Alona";
let addtional = "gender";
console.log(personalnfo[neededKey]);
personalnfo[addtional] = "male";
console.log(personalnfo);

let car = { model: "Audi", year: 2010 };
let needed = "type";
car[needed] = "Sedan";

console.log(car);

let komshi = { name: "kotce", age: 15, gender: "male" };
console.log(komshi);
komshi.floor = 2;

console.log(komshi);
let newKey = komshi["name"];
console.log(newKey);
for (let el in komshi) {
  console.log(el);
  if (komshi[el] !== undefined) {
    console.log(komshi[el]);
  }
}
function exc(input) {
  let obj = JSON.parse(input);

  for (let el in obj) {
    console.log(`${el}: ${obj[el]}`);
  }
}
exc(`{"name": "George", "age": 40, "town": "Sofia"}`);

*/
