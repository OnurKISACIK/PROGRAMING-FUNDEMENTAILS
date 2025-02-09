/*
let a = ["Onur", "Osman", "Ali"];
let b = a.join(",");
let c = "";
for (let i = 1; i <= 2; i++) {
  c = [i];
  console.log(c);
}
*/
/*
let arr = ["onur", "ahmet", "ayse", "osman", "kemal"];
let d = arr.slice(arr.length - 2);
console.log(d);
*/
function ne(arr) {
  let onur = Number(arr.shift());
  let first2el = arr.slice(0, 2);
  let last2El = arr.slice(2, 4);
  console.log(last2El.join(" "));
  console.log(first2el.join(" "));
}
ne([2, 4, 7, 8, 6]);
