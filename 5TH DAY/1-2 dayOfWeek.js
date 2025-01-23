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
