for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  console.log(`5 X ${i} = ${5 * i} `);
}

// sum of 10
let n = 1,
  sum = 0;
while (n <= 10) {
  sum = sum + n;
  n++;
}
console.log(`the sum of 1 to 10 is ${sum}`);

// print 10 to 1
let number = 10;
while (number >= 1) {
  console.log(number);
  number--;
}

let z = 1;
do {
  console.log(z);
  z++;
} while (z <= 5);

function factorial(n) {
  let fact = 1;
  do {
    fact = fact * n;
    n--;
  } while (n >= 1);
  return fact;
}

console.log(`the factorial of 5 is ${factorial(5)}`);
console.log(`the factorial of 6 is ${factorial(6)}`);
console.log(`the factorial of 8 is ${factorial(8)}`);

for (let i = 1; i <= 5; i++) {
  console.log();
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
}

console.log(`\nusing continue for i = 5`);
// using break and continue
for (let i = 0; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

console.log(`using break for jumpover = 7`);

let jumpover = 1;
while (jumpover <= 10) {
  if (jumpover == 7) break;
  console.log(jumpover);
  jumpover++;
}

// break means come out of the loop
// continue means come out for that iteration of that loop
// process.stdout.write is used for printing in the same line
