let arr = [1, 2, 3, 4, 5];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(arr[0]); //1
console.log(arr[arr.length - 1]); //arr[5-1]  ---> arr[4] ----> 5

arr.push(6);
console.log(arr); // [1,2,3,4,5,6]

arr.pop();
console.log(arr); //[1,2,3,4,5]

arr.unshift(10); //unshift means add the element at the start
console.log(arr); //[10,1,2,3,4,5]

arr.shift(); //shift means remove the element from the start
console.log(arr); //[1,2,3,4,5]

// map , reduce filter
console.log("------------------map------------------");
function double(n) {
  return n * 2;
}

const doubleArray = arr.map(double);
console.log(doubleArray);

// -------- filter
console.log("------------------filter---------------");

function Iseven(n) {
  if (n % 2 == 0) return n;
}
const even = arr.filter(Iseven);
console.log(typeof even); //object
console.log(`the even no are in an array ${even}`);

// reduce
console.log("------------------reduce---------------");
const add = arr.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(add);
console.log(typeof add);
// loop
console.log("------------loop-----------------------");
let king = ["Chai", "Code", "T-shirt", 21];
for (let i = 0; i < king.length; i++) {
  console.log(king[i]);
}

king.forEach((element) => {
  console.log(element);
});

// two dimensional array
// array inside an array i.e nested array
let twoD = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(twoD);
console.log(twoD[0]);
console.log(twoD[0][2]);
console.log(twoD[2][2]);
console.log(twoD[1][0]);

twoD[0][1] = 6;
console.log(twoD[0][1]);
console.log(twoD);

// dynamically creating two dimensional array
let row = 3,
  column = 3,
  count = 0;
let two_dimensional = [];

for (let i = 0; i < row; i++) {
  two_dimensional[i] = [];
  for (let j = 0; j < column; j++) {
    two_dimensional[i][j] = ++count;
  }
}
console.log(two_dimensional);
console.log(two_dimensional[0][2]);
console.log(two_dimensional[1][1]);
