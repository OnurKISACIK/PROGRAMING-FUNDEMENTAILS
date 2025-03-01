function employee(array) {
  for (let el of array) {
    let obj = { Name: el, "Personal Number": el.length };
    console.log(
      "Name: " +
        obj.Name +
        " -- " +
        "Personal Number: " +
        obj["Personal Number"]
    );
  }
}

employee([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal"
]);
