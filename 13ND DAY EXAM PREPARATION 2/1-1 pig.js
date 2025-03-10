function pig(arr) {
  let food = parseFloat(arr[0]) * 1000; // convert to grams
  let hay = parseFloat(arr[1]) * 1000; // convert to grams
  let cover = parseFloat(arr[2]) * 1000; // convert to grams
  let weight = parseFloat(arr[3]) * 1000; // convert to grams

  for (let day = 1; day <= 30; day++) {
    food -= 300;

    if (day % 2 === 0) {
      hay -= food * 0.05;
    }

    if (day % 3 === 0) {
      cover -= weight / 3;
    }

    if (food <= 0 || hay <= 0 || cover <= 0) {
      console.log("Merry must go to the pet store!");
      return;
    }
  }

  console.log(
    `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
      2
    )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
  );
}
pig(["10", "5", "5.2", "1"]);
