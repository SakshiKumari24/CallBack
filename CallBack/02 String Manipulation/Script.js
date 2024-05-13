function manipulateString(str) {
    const manipulatedString = str.toUpperCase();
    function logString() {
      console.log("The manipulated string is:", manipulatedString);
    }
    return logString;
  }
  const inputString = "hello, world!";
  const logStringCallback = manipulateString(inputString);
  logStringCallback();
  