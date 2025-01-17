function townInfo(city, population, area) {
  if (city.length < 3) {
    console.log("Town name must be at least 3 characters!");
  }
  if (population < 0) {
    console.log("Population must be a positive number!");
  }
  if (area < 0) {
    console.log("Area must be a positive number!");
  }
  if (city.length >= 3 && population >= 0 && area >= 0) {
    console.log(
      `Town ${city} has population of ${population} and area ${area} square km.`
    );
  }
}
townInfo("Ka", 3600, -50);
