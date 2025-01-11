function theatrePromotions(day, age) {
  let isvalid = true;
  switch (day) {
    case "Weekday":
      if ((0 <= age && age <= 18) || (64 < age && age <= 122)) {
        price = 12;
      } else if (18 < age && age <= 64) {
        price = 18;
      } else {
        isvalid = false;
      }

      break;

    case "Weekend":
      if ((0 <= age && age <= 18) || (64 < age && age <= 122)) {
        price = 15;
      } else if (18 < age && age <= 64) {
        price = 20;
      } else {
        isvalid = false;
      }
      break;
    case "Holiday":
      if (0 <= age && age <= 18) {
        price = 5;
      } else if (18 <= age && age <= 64) {
        price = 12;
      } else if (64 < age && age <= 122) {
        price = 10;
      } else {
        isvalid = false;
      }
      break;
  }
  if (isvalid) {
    console.log(`${price}$`);
  } else {
    console.log("Error!");
  }
}

theatrePromotions("Weekday", 42);
theatrePromotions("Holiday", -12);
theatrePromotions("Holiday", 15);
