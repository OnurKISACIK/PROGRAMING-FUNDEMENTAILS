function sort(n) {
  let a = n;
  if (a % 1 === 0) {
    let b = a;
    let c = b.toString();
    let d = c.split("");
    let e = d.map(Number);
    let f = e.sort((a, b) => b - a);
    let g = f.join("");
    console.log(g);
  } else if (a % 1 !== 0) {
    a = a.split("").reverse().join("");
    console.log(a);
  }
}
sort(1234);
