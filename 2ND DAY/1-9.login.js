/*function login(input) {
  let index = 0;
  let password = input[index];
  let pass = password.split(``).reverse().join(``);

  index++;
  let command = input[index];
  let counter = 1;
  while (command !== pass) {
    if (counter > 3) {
      console.log(`User ${password} blocked!`);
      break;
    }
    if (command === "pass") {
      console.log(`User ${password} logged in`);
    } else {
      console.log("Incorrect password. Try again.");
    }
    counter++;
    index++;
    command = input[index];
  }
  if (pass === command) {
    console.log(`User ${password} logged in.`);
  }
}
login(["sunny", "rainy", "cloudy", "sunny", "notsunny"]);
login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);*/
function login(input) {
  let pass = input[0];
  let password = pass.split("").reverse().join("");

  for (let i = 1; i <= input.length; i++) {
    let counter = i;

    let check = input[i];

    if (password === check) {
      console.log(`User ${pass} logged in.`);
      break;
    }
    if (counter == 4) {
      console.log(`User ${pass} blocked!`);
      break;
    }
    if (password !== check) {
      console.log(`Incorrect password. Try again.`);
    }
  }
}
//login(["sunny", "rainy", "cloudy", "sunny", "notsunny"]);
//login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
