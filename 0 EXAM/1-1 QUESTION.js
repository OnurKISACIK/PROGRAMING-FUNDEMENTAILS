function bus(arr) {
  let n = Number(arr.shift());
  let cities = [];
  let earnedMoney = [];
  let expenses = [];
  let netPerCity = 0;

  let counter = 0;
  for (let i = 0; i < n; i++) {
    let city = arr.shift();
    let earned = Number(arr.shift());
    let expense = Number(arr.shift());
    counter++;
    let profit = earned - expense;

    if (counter % 3 === 0 && counter % 5 !== 0) {
      expense += expense * 0.5;
      profit = earned - expense;
    } else if (counter % 5 === 0) {
      earned -= earned * 0.1;
      profit = earned - expense;
    }

    netPerCity += profit;
    console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
  }

  console.log(`Burger Bus total profit: ${netPerCity.toFixed(2)} leva.`);
}

bus([
  "5",
  "Lille",
  "2226.00",
  "1200.60",
  "Rennes",
  "6320.60",
  "5460.20",
  "Reims",
  "600.20",
  "452.32",
  "Bordeaux",
  "6925.30",
  "2650.40",
  "Montpellier",
  "680.50",
  "290.20"
]);
