// import _ from "lodash";

// const arr = [1, 2, 3, 4, 5, 6];

// const shuffled = _.shuffle(arr);
// console.log(shuffled);

// const chunked = _.chunk(arr);
// const chunked2 = _.chunk(arr, 2);

// console.log(chunked);
// console.log(chunked2);

import axios from "axios";

axios
  .get("https://api.github.com")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => console.log(error));
