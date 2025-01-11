function numbersFromNToOne(N) {
  let i = N;
  while (i !== 0) {
    console.log(N);
    N = N - 1;

    i--;
  }
}
numbersFromNToOne(3);
