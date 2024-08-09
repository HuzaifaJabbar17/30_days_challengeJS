console.log("Session storage");

sessionStorage.setItem("course", "javascript");
sessionStorage.setItem("teacher", "Hitesh");

const a = sessionStorage.getItem("course");
const teacher = sessionStorage.getItem("teacher");

console.log(a);
console.log(typeof a);
console.log(teacher);

const subject = {
  teacher: "Khalid",
  subjects: ["Maths", "physics", "Accounts"],
  age: 65,
  personality: "COOL",
};

console.log(subject);
console.log(subject.subjects);
console.log(subject.personality);

sessionStorage.setItem("subject", JSON.stringify(subject));

const ABC = sessionStorage.getItem("subject");

console.log(ABC); //getting as string
console.log(JSON.parse(ABC));
