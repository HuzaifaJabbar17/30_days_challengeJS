const p = new Promise((res, rej) => {
  setTimeout(() => res("Promise resolved"), 2000);
});

// handling promise using then&catch
p.then((res) => console.log(res)).catch((err) => console.log("Error"));

// using async await
async function p_async() {
  const res = await p;
  console.log(res);
}

p_async();

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise rejected"), 5000);
});

p1.then((res) => console.log(res)).catch((error) =>
  console.log("error", error)
);

async function p1_Async() {
  try {
    const res = await p1;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

p1_Async();