/*
function dayOfWeek(day) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  if (day <= days.length) {
    console.log(days[day - 1]);
  } else {
    console.log("Invalid day!");
  }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(8);
*/
function dayOfWeek(day) {
  let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  /*
  if (day < 0 || day > 7) {
    console.log("Invalid Choose");
  } else {
    console.log(weekDays[day - 1]);
  }
  */
  let result = day < 0 || day > 7 ? "Invalid Choose" : weekDays[day - 1];
  console.log(result);
}
dayOfWeek(4);
