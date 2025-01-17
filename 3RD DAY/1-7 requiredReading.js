function requiredREading(totalPages, inOneHour, neededDays) {
  let neededHour = totalPages / inOneHour;
  let requiredDays = neededHour / neededDays;
  console.log(requiredDays);
}
requiredREading(212, 20, 2);
requiredREading(432, 15, 4);
