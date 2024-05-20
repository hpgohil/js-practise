// let score = "33";
// let score = null;
let score = undefined;


let valueInNum = Number(score);
// console.log(score, typeof score, valueInNum, typeof valueInNum);

// console.log(Boolean(1), Boolean(0), Boolean(null), Boolean(undefined), Boolean(""), Boolean({}));

let someNumber = 33;

let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);


// ************************************* OPERATIONS ******************************************
let counter = 50;
// counter++;
// console.log(counter);
// ++counter;
// console.log(counter);

// const newCounter = counter++;
// console.log(newCounter);
// console.log(counter);

let newCounter = ++counter;
// console.log(newCounter);
// console.log(counter);

let no = Number(undefined);
// console.log(no);

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id, anotherId)
// console.log(id===anotherId)

const fruits = ['mango', 'apple', 'banana']

const myObj = {
    name: "hari",
    city: "Vadodara"
}
const myFunc = function(){}

console.log(typeof fruits, typeof myObj, typeof myFunc)