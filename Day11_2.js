const GITHUB_API = "https://api.github.com/users/HuzaifaJabbar17";

async function helloUser() {
  const response = await fetch(GITHUB_API);
  const data = await response.json();
  console.log(data);
}

// helloUser();

fetch(GITHUB_API)
  .then((res) => res.json())
  .then((data) => console.log(data.login, data.location))
  .catch((error) => console.log(error));

const fetchData1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve data1");
  }, 1000);
});
const fetchData2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve data2");
  }, 2000);
});
const fetchData3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve data3");
  }, 3000);
});

//   chaining promises
fetchData1
  .then((res) => {
    console.log(res);
    return fetchData2;
  })
  .then((res) => {
    console.log(res);
    return fetchData3;
  })
  .then((res) => {
    console.log(res);
  });

// whenever you write an async function wrap it in try &catch  block to handle error
// if the result is successfull then the try block will be executed
// or if we get any error in try block then the catch method will be executed
// if the result get any error then the catch block will be executed