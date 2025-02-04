function order(product, quantity) {
  let a = product;
  let b = quantity;
  call(a, b);
  function call(a, b) {
    let final = 0;
    switch (a) {
      case "coffee":
        final = b * 1.5;
        console.log(final.toFixed(2));
        break;
      case "water":
        final = b * 1;
        console.log(final.toFixed(2));
        break;
      case "coke":
        final = b * 1.4;
        console.log(final.toFixed(2));
        break;
      case "snacks":
        final = b * 2;
        console.log(final.toFixed(2));
        break;
    }
  }
}
order("coffee", 2);
