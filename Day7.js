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

console.log(book);
console.log(typeof book); //object

console.log(book.author);
console.log(book.title);

console.log(book.print());

book.updateYear(1600);
console.log(book);

const library = {
  name: "hj library",
  books: [
    {
      title: "Jug Jug",
      author: "Bhaskar trivedi",
      year: 1978,
    },
    {
      title: "Budget Session",
      author: "Nirmala Sitharaman",
      year: 2024,
    },
    {
      title: "T20 World Champions 2024",
      author: "Rahul Dravid",
      year: 2024,
    },
  ],
};

console.log(library);
console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);

// Object.Array.forEach()
// forEach() takes a call back function as a parameter
// forEach() method is specially designed for arrays
library.books.forEach((book) => {
  console.log(book.title);
});


console.log(book.getTitleAndYear());


console.log("------------------ for in loop ----------------------")

for (const key in book) {
    console.log(` ${key} its value ${book[key]}`);
}

console.log(Object.values(book));
// object.values returns an array 

console.log(Object.keys(book));
// object.keys returns an array 