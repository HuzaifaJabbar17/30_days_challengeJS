let PersonName = "John Cena";
let PersonAge = 54;

console.log(`${PersonName} is ${PersonAge} years old`);

const multiLine = `This is first line
This is second line
This is third line
This is fourth line
This is fifth line
`;

console.log(multiLine);

const number = [10, 20, 30, 35, 45, 65, 78];

let [firstValue, secondValue, ...newNumber] = number;
console.log(firstValue, secondValue);
console.log(typeof firstValue, typeof secondValue);
console.log(newNumber);
console.log(typeof newNumber);
console.log(number);

const book = {
  title: "Julius Ceaser",
  author: "William Shakespeare",
  year: 1599,

  print: function () {
    return `${this.title} is written by ${this.author}`;
  },

  updateYear: function (year) {
    this.year = year;
  },

  getTitleAndYear: function () {
    return `${this.title} in ${this.year}`;
  },
};

let { title, author } = book;
console.log(title, author);

let { title: nTitle, author: nAuthor } = book;
console.log(nTitle, nAuthor);

// default value of destructuring element is undefined
const [p, q, r] = [1, 2];
console.log(p, q, r);

// we acn also set the default value of destructuring element
const [m = 1, n = 5, o = 1] = [8, 9];
console.log(m, n, o);

const gym = ["squats", "running", "pushups", "abs"];
console.log(gym);
console.log(...gym);

const newGym = [...gym, "Deadlift", "Swimming"];
console.log(newGym);

const add = function (...n) {
  console.log(n);
};
add(2, 8, 5);

const addNumbers = function (...n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  console.log(sum);
};

const a = [9, 8, 7, 6, 5];
addNumbers(...a);
addNumbers(2, 5, 60);
addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);

const cricket_opener = function (a, b = "Rohit Sharma") {
  return `${b} and ${a} are opening pair of India`;
};
console.log(cricket_opener("Shikhar Dhawan"));
console.log(cricket_opener("Yashaswi Jasiwal", "Shubman Gill"));

const product = function (a, b = 1) {
  return a * b;
};
console.log(product(50));
console.log(product(2 * 50));

// enhanced object literals

let name = "Huzaifa Jabbar";
let age = 23;
let profession = "Software Engineer";

const prinfMydata = function () {
  return `${this.name} ${this.age} and ${this.profession}`;
};

const Mydata = { name, age, profession, prinfMydata };
console.log(Mydata);

const key1 = "FirstName";
const key2 = "LastName";

const user = {
  [key1]: "Jack",
  [key2]: "Kallis",
  age: 56,
};

console.log(user);
