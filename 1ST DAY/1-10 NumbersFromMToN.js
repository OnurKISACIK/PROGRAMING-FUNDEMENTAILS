function numbersFromMToN(M, N) {
  let i = M;
  while (i >= N) {
    console.log(M);
    M = M - 1;
    i--;
  }
}
numbersFromMToN(4, 1);

//Write a function that receives a number M and a number N (M will always be bigger than N).
// Print all numbers from M to N.
