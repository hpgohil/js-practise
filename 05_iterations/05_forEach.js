//forEach method on Arrays

const coding = ["js", "rb", "cpp", "swift"];

coding.forEach(function (item) {
  //   console.log(item);
});
// coding.forEach((item, index, arr) => console.log(item, index, arr));

// const printMe = (item) => {
//   console.log(item);
// };
function printMe(item) {
  console.log(item);
}
// coding.forEach(printMe);

//[{}, {}, {}]
const myArr = [
  { name: "Hari", age: 32 },
  { name: "Ram", age: 27 },
  { name: "Krishna", age: 20 },
];

// myArr.forEach((item) => console.log(item.name));

//forEach method  doesn't return any value. So, if we try to store it in variable, it returns undefined.

const programingLanguages = coding.forEach((item) => {
  //   console.log(item);
  //   return item;
});
// console.log(programingLanguages);
