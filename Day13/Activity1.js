export function sum(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}

export default function subtract(a, b) {
  return a - b;
}

export const user = {
  name: "Huzaifa",
  age: 23,
  city: "kolkata",
  isActive: true,
  printname: function () {
    console.log(`This is ${this.name} and he belongs to ${this.city} `);
  },
};
