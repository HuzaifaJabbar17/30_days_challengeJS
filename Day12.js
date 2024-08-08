function hello() {
  throw new Error("Hello Error ");
}

// hello();
// giving error and the program stops execution

// handling error using try & catch block
try {
  hello();
} catch (error) {
  console.log(error);
}

const sum = function (a, b = 0) {
  if (a / b === Infinity) throw new Error("Arithmetic error");
  return a / b;
};

console.log(sum(15, 3));

try {
  sum(15);
} catch (error) {
  console.log(error);
}

// console.log(sum(15)); if we dont handle error the program will stops exucting the next line code

// handling error using try & catch block we use try&catch block so that we can handle error ,
// and using try&catch the program stops execution   does not stops if we catch the error

function Olympics() {
  throw new Error(
    "Server Crashing............ India is highest in tally of gold medals "
  );
}

try {
  Olympics();
} catch (error) {
  console.log(error);
} finally {
  console.log("Next Olympics is going to held in India");
}

class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = this.constructor.name;
    this.errorCode = errorCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error", 1004);
}

function handleError() {
  try {
    throwCustomError();
  } catch (error) {
    console.log(error, error.message, error.errorCode);
  }
}

handleError();

class customInputError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = this.constructor.name;
    this.errorCode = errorCode;
  }
}

function input(name) {
  if (name && typeof name === "string") console.log(name);
  // else throw new Error("the given input is not string");
  else throw new customInputError("the given input is not string", 499);
}

function handleInput() {
  try {
    input(56);
    a;
  } catch (error) {
    console.log(error, error.errorCode);
  }
}

handleInput();

const p = new Promise((resolve, reject) => {
  const isSuccess = Math.random() > 0.5;
  setTimeout(() => {
    if (isSuccess) {
      resolve("Promise resolved ");
    } else {
      reject(new Error("Promise rejected"));
    }
  }, 1000);
});

p.then((res) => console.log(res)).catch((error) => console.log(error));

async function promiseHandler() {
  try {
    const res = await p;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

promiseHandler();

const invalid_url = "https://api.githubb.com";

fetch(invalid_url)
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) =>
    console.log(` error invalid url ${error.message} ${error}`)
  );

async function handleInvalidUrl(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

handleInvalidUrl(invalid_url);

console.log("try-catch block");
