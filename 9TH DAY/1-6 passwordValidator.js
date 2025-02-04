function passwordValidator(password) {
  function length(password) {
    if (password.length >= 6 && password.length <= 10) {
      return true;
    } else {
      console.log("Password must be between 6 and 10 characters");
      return false;
    }
  }

  function checkAlphanumeric(password) {
    let pattern = /^[A-Za-z0-9]+$/;
    if (pattern.test(password)) {
      return true;
    } else {
      console.log("Password must consist only of letters and digits");
      return false;
    }
  }
  function min2Digits(password) {
    let pattern = /[0-9]{2,}/;
    if (pattern.test(password)) {
      return true;
    } else {
      console.log("Password must have at least 2 digits");
      return false;
    }
  }

  let isValidLength = length(password);
  let isAlphanumeric = checkAlphanumeric(password);
  let isMin2Digit = min2Digits(password);
  if (isValidLength && isAlphanumeric && isMin2Digit) {
    console.log("Password is valid");
  }
}
passwordValidator("logIn");
