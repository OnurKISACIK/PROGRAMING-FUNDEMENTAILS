function loadingBar(num) {
  let loading = "[";

  let percentage = Math.floor(num / 10);
  let dots = 10 - percentage;
  loading += `%`.repeat(percentage);
  loading += `.`.repeat(dots);
  loading += `]`;
  if (num == 100) {
    console.log(`100% Complete!`);
    console.log(`${loading}`);
  } else {
    console.log(`${num}% ${loading}`);
    console.log(`Still loading...`);
  }
}
loadingBar(30);
