function spiceMustFlow(yeild) {
  let spice = Number(Math.abs(yeild));
  let consumed = 26;
  let total = 0;
  let dayCount = 0;
  let leftamount = 0;

  for (let yeild = spice; yeild >= 100; yeild -= 10) {
    total = yeild - consumed;
    leftamount += total;

    dayCount++;
  }
  leftamount -= consumed;
  console.log(dayCount);
  console.log(leftamount);
}
spiceMustFlow(-450);
