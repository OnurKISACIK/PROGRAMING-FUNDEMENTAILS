function maxSequenceOfEqualElements(arr) {
  let maxSequence = [];
  let currentSequence = [];

  for (let i = 0; i < arr.length; i++) {
    currentSequence = [arr[i]];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentSequence.push(arr[j]);
      } else {
        break;
      }
    }

    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence;
    }
  }

  console.log(maxSequence.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
