function mining(input) {
  let totalMoney = 0;
  let currentDay = 1;
  let bitcoinCOunt = 0;
  let dayOfFirstBitcoin = 0;

  for (let goldMined of input) {
    if (currentDay % 3 == 0) {
      goldMined *= 0.7;
    }
    let moneyFromGold = goldMined * 67.51;
    totalMoney += moneyFromGold;

    while (totalMoney >= 11949.16) {
      if (bitcoinCOunt === 0) {
        dayOfFirstBitcoin = currentDay;
      }

      bitcoinCOunt++;
      totalMoney -= 11949.16;
    }
    currentDay++;
    console.log(`Bought bitcoins: ${bitcoinCOunt}`);
    if (bitcoinCOunt > 0) {
      console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
  }
}
mining([100, 200, 300]);
