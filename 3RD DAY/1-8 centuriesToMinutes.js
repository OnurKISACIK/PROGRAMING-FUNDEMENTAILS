function centuriesToMinutes(time) {
  let oneCentuary = 100;
  let oneYearDays = 365.2422;

  console.log(
    `${time} centuries = ${oneCentuary * time} years = ${Math.trunc(
      oneYearDays * time * 100
    )} days = ${Math.trunc(oneYearDays * time * 100) * 24} hours = ${Math.trunc(
      oneYearDays * time * 100
    ) *
      24 *
      60} minutes`
  );
}
centuriesToMinutes(5);
