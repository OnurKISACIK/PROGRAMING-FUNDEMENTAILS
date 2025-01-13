function miningOne(input) {
  let x = input.length;

  let bitcountCounter = 0;
  let currentDay = input.length - 2;
  let totalAmount = 0;
  let firstBitcoinPurchased = "";
  for (let i = 0; i < x; i++) {
    let dailyGold = input[i];
    if (currentDay % 3 === 0) {
      dailyGold = dailyGold * 0.7;
    }
    let totalEarnedMoneyFromGOld = dailyGold * 67.51;
    totalAmount += totalEarnedMoneyFromGOld;

    while (totalAmount >= 11949.16) {
      if (bitcountCounter === 0) {
        firstBitcoinPurchased = currentDay;
      }

      totalAmount -= 11949.16;
    }
    currentDay++;
    bitcountCounter++;
    if (bitcountCounter > 0) {
      console.log(
        `Day of the first purchased bitcoin: ${firstBitcoinPurchased}`
      );
    }
  }

  console.log(`Bought bitcoins: ${bitcountCounter}`);
  console.log(`Left money: ${totalAmount.toFixed(2)} lv.`);
}
miningOne([100, 200, 300]);
