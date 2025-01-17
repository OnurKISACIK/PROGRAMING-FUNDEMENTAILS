function amazingNumbers(num) {
  let numAsString = num.toString();
  // burada num i stringe ceviriyoruz ki her bir rakami ayri ayri toplayabilelim.

  let sum = 0;
  for (let i = 0; i < numAsString.length; i++) {
    //asagidaki islemde sayilari tektek toplamaktayiz.
    sum += Number(numAsString[i]);
  }
  // toplam sayinin 9 icerip icermemesine bakmaktayiz.
  let result = sum.toString().includes("9");

  // eger 9 iceriyorsa true, icermiyorsa false yazdiriyoruz.
  console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amazingNumbers(1233);
amazingNumbers(999);
