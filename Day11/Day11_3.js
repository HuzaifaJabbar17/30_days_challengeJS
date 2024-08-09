const one = new Promise((resolve, reject) => {
    let success = false;
    setTimeout(() => {
      if (success) {
        resolve("Promise resolve one");
      } else reject("Promise rejected one");
    }, 1000);
  });
  
  const two = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve("Promise resolve two");
      } else reject("Promise rejected two");
    }, 2000);
  });
  const three = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve("Promise resolve three");
      } else reject("Promise rejected three");
    }, 3000);
  });
  
  Promise.all([one, two, three])
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
  
  // Promise.all() returns an array of promise if all promise are resolved ,
  //  if any of the promise gets rejected then it will throw error as fast as possible
  
  Promise.allSettled([one, two, three])
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
  
  //   Promise.allSettled() returns an array of response object eithed its gets resolve or reject we get all settled promise
  // settled means promise resolved or promise rejected (any one of them)
  Promise.race([one, two, three])
    .then((res) => {
      console.log(`Promise.race()`, res);
    })
    .catch((error) => console.log(error));
  
  //   promise.race() return that promise who ever settled first, either it resolve or reject
  
  Promise.any([one, two, three])
    .then((res) => {
      console.log(`Promise.any()`, res);
    })
    .catch((error) => console.log(error));
  
  //   promise.any() return that promise which resolve first
  
  /*
  // handling promise use then & catch method
  one.then((res) => console.log(res)).catch((error) => console.log(error));
  
  // handling promise using async await and handling error using try & catch method
  async function handlePromise(p) {
    try {
      const res = await p;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  handlePromise(one);
  */
  