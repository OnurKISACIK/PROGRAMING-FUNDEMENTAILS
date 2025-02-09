function lastKNumbersSequence(n, k) {
  let seq = [1];
  for (let i = 1; i < n; i++) {
    let nextEL = i > k ? k : i;
    let copyArr = seq.slice(seq.length - nextEL);
    let sum = 0;
    for (const el of copyArr) {
      sum += el;
    }
    seq.push(sum);
  }
  console.log(seq.join(` `));
}
lastKNumbersSequence(6, 3);
