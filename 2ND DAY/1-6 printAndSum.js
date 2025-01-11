function printAndSum(Start, End) {
  let number = 0;
  let allNums = ""; // with this way little bit down we take the numbers as row thats why we put empty
  for (let i = Start; i <= End; i++) {
    number += i;
    allNums += i + " "; // this is putting all the numbers next to each other with one space
  }
  console.log(allNums);
  console.log(`Sum: ${number}`);
}
printAndSum(5, 10);
