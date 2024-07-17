// let input = -15;

function checknumber(input) {
  if (input < 0) {
    console.log(`input is negative ${input}`);
  } else if (input == 0) {
    console.log(`input is zero ${input}`);
  } else {
    console.log(`input is positive number ${input}`);
  }
}
checknumber(15);

let age = 45;
if (age >= 18) {
  console.log("you are eligible to vote");
} else {
  console.log("you are not eligible to vote");
}

let a = 12,
  b = 12,
  c = 25;
if (a > b) {
  if (a > c) {
    console.log(`a is the largest number ${a}`);
  }
} else {
  if (b > c) {
    console.log(`b is the greatest number ${b}`);
  } else {
    console.log(`c is the largest number ${c}`);
  }
}
let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Holiday");
}

let grade = 85;
switch (true) {
  case (grade <= 100 && grade > 90):
    console.log(`your grade is A`);
    break;
  case (grade <= 90 && grade > 80):
    console.log(`your grade is B`);
    break;
  case (grade <= 80 && grade > 70):
    console.log(`your grade is C`);
    break;
  case (grade <= 70 && grade > 60):
    console.log(`your grade is D`);
    break;
  case (grade <= 60 && grade > 50):
    console.log(`your grade is E`);
    break;
  case (grade <= 50 && grade >= 40):
    console.log(`your grade is F`);
    break;
  default:
    console.log(" you did not got any grade");
}

let n = 13;

const Even_Odd = n % 2 == 0 ? "Even" : "Odd";
console.log(Even_Odd);

let year = 1900;
function isLeapYear(n) {
  if (n % 400 == 0) {
    return 1;
  } else if (n % 100 == 0) {
    return 0;
  } else if (n % 4 == 0) {
    return 1;
  } else return 0;
}
console.log(isLeapYear(year));
