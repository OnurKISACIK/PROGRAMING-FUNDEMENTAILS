function sumFirstAnsLast(arr) {
  let firstEl = Number(arr.shift());
  let lastEl = Number(arr.pop());
  return firstEl + lastEl;
}
console.log(sumFirstAnsLast(["20", "30", "40"]));

// Bunu daha sonra bak
function secondOp(arr) {
  let firstEl = Number(arr.shift());
  let lastEl = Number(arr.pop());
  let total = arr => console.log(firstEl * lastEl);
}
secondOp(["20", "30", "40"]);
