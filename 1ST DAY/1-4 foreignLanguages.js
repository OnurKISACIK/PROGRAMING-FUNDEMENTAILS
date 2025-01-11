function foreignLanguages(Country) {
  let FirstCountry = "USA";
  let Second = "England";
  let Third = "Spain";
  let Forth = "Argentina";
  let Fifth = "Mexico";
  if (Country == FirstCountry || Country == Second) {
    console.log("English");
  } else if (Country == Third || Country == Forth || Country == Fifth) {
    console.log("Spanish");
  } else {
    console.log("unknown");
  }
}
foreignLanguages("Turkey");
