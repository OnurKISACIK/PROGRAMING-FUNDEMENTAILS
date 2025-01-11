function vacation(people, type, day) {
  amountPerPerson = 0;

  switch (day) {
    case "Friday":
      if (type === "Students") {
        amountPerPerson = 8.45;
      } else if (type === "Business") {
        amountPerPerson = 10.9;
      } else if (type === "Regular") {
        amountPerPerson = 15;
      }
      break;
    case "Saturday":
      if (type === "Students") {
        amountPerPerson = 9.8;
      } else if (type === "Business") {
        amountPerPerson = 15.6;
      } else if (type === "Regular") {
        amountPerPerson = 20;
      }
      break;
    case "Sunday":
      if (type === "Students") {
        amountPerPerson = 10.46;
      } else if (type === "Business") {
        amountPerPerson = 16;
      } else if (type === "Regular") {
        amountPerPerson = 22.5;
      }
      break;
  }
  totalprice = amountPerPerson * people;
  if (type === "Students" && people >= 30) {
    totalprice *= 0.85;
  }
  if (type === "Business" && people >= 100) {
    totalprice = totalprice * 0.9;
  }
  if (type === "Regular" && people >= 10 && people <= 20) {
    totalprice = totalprice * 0.95;
  }
  console.log(`Total price: ${totalprice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday");
