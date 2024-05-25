//REST Operators
function addNumbers(...num1) {
  return num1;
}
const res = addNumbers(5, 2, 3, 5, 2, 9, 233);
// console.log(res);

function countNumbers(value1, value2, ...num1) {
  return num1;
}

// console.log(countNumbers(23, 55, 32, 53, 56, 89, 42));

//Pass objects in function

function handleObject(anyObj) {
  return `Username is ${anyObj.username} and age is ${anyObj.age}`;
}

const user = {
  username: "Hari",
  age: 30,
};

console.log(handleObject(user));

console.log(
  handleObject({
    username: "Ram",
    age: 23,
  })
);

//Pass arrays in the function

const myArr = [12, 34, 35, 34];

function handleArray(anyArr) {
  return anyArr[2];
}

// console.log(myArr);
// handleArray(myArr);


