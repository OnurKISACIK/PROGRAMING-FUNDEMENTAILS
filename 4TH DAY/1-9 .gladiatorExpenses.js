function gladiatorExpenses(
  lostFight,
  helmetPrice,
  swordPrice,
  sheildPrice,
  armorPrice
) {
  let expenses = 0;
  let sheildCount = 0;

  for (let i = 1; i <= lostFight; i++) {
    if (i % 2 === 0) {
      expenses += helmetPrice;
    }
    if (i % 3 === 0) {
      expenses += swordPrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      expenses += sheildPrice;
      sheildCount++;
    }
    if (sheildCount === 2) {
      expenses += armorPrice;
      sheildCount = 0;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
