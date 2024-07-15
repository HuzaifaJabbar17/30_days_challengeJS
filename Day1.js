var a = 65;
console.log(a); //65

let champ = "Huzaifa";
console.log(champ); //Huzaifa

const isPrime = true;
console.log(isPrime); //true

let obj = {
  name: "Huzaifa",
  age: 23,
  isEmployed: false,
  subjects: ["SQL", "JAVA", "JAVASCRIPT"],
};

let try_array = [1, 2, 3, 4, "chai", true];

// different data types in JS are string , number , boolean , object

// ---> null , undefined, Symbol,BigInt

console.log(typeof 65); //number
console.log(typeof "name"); //string
console.log(typeof true); //boolean
console.log(typeof obj); // object
console.log(typeof try_array); // object

// it means array is also an object in JS
// array , object , promises ,dates are built in object

// reassigning variables with let

// console.log(z); // reference error ---> commented this code because error coming
let z = 65;
console.log(z); // 65
z = 100;
console.log(z); //100

// reassigning variables with const

const hello = "Hello World";
console.log(hello); //Hello World

// hello = "Hello India";
// console.log(hello); // typeError: assignment to constant variable error ---> commented this code because error coming

// reassigning a value to a const variable is not possible
