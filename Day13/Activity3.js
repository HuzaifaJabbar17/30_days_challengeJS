const PI = 3.14159;
const api = "https://api.github.com";

function area_circle(radius) {
  return PI * radius * radius;
}

function circumference_circle(radius) {
  return PI * radius * 2;
}

function radius(diameter) {
  return diameter / 2;
}
const circle = {
  PI,
  api,
  area_circle,
  circumference_circle,
  radius,
};

export default circle;
