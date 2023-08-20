function isLeap(year) {
  /**************Don't change the code above****************/

  var yearLeap;

  if (year % 400 === 0) {
    yearLeap = "Leap";
  } else if (year % 100 === 0) {
    yearLeap = "Not Leap";
  } else if (year % 4 === 0) {
    yearLeap = "Leap";
  } else {
    yearLeap = "Not Leap";
  }

  //Write your code here.
  /**************Don't change the code below****************/
  return yearLeap;
}

console.log(isLeap(1948));
