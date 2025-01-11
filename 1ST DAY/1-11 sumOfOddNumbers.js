function sumOfOddNumbers(n) {
  let i = n;
  let number = 0;
  let sayi = 1;
  let toplam = 0;

  while (i !== 0) {
    toplam += sayi;
    if (number % 2 == 0) {
      console.log(sayi);
    }

    i--;
    sayi += 2;
  }
  console.log("Sum: " + toplam);
}
sumOfOddNumbers(3);
