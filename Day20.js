// 1.
// localStorage.setItem("name", "Huzaifa Jabbar");
// localStorage.setItem("age", 23);
// let names = localStorage.getItem("name");
// let age = localStorage.getItem("age");

// console.log(names);
// console.log(age);

// 2.
const Person = {
  name: "Jackie",
  profession: "Teacher",

  printPerson: function () {
    console.log(`${this.name} is ${this.profession}`);
  },
};

console.log(Person); //Person object printed on the console
Person.printPerson(); //call the printPerson method

// localStorage.setItem("Person",Person); //in localStorage the key Person wll  will be an object
// console.log(JSON.stringify(Person)); //converting Person object into string

// to convert object into string use JSON.stringify

localStorage.setItem("Person", JSON.stringify(Person));
const a = localStorage.getItem("Person");

console.log(a);

console.log(a.name); //undefined
console.log(a.profession); //undefined

// when we are getting some thing from web server we have to convert it into javascript objects using JSON.parse()

// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

const b = JSON.parse(localStorage.getItem("Person"));

console.log(b);
console.log(b.name);
console.log(b.profession);

// Yes, localStorage can only store data as strings. If you need to store other types of data (e.g., objects, arrays),
// // you'll need to serialize them to a string before storing them and deserialize them when retrieving them.
// While localStorage only supports string data, you can work around this limitation by serializing
// non-string data (like objects and arrays)
// to JSON strings using JSON.stringify before storing them.
//  When retrieving the data, you can deserialize it back into its original form using JSON.parse.
// This approach allows you to store complex data structures in localStorage efficiently.
