//for of loop on Array
const myArr = [1, 2, 3, 4, 5];
for (const num of myArr) {
  //   console.log(num);
}
//using for loop
for (let i = 0; i < myArr.length; i++) {
  // console.log(myArr[i]);
}
//for of loop on strings
const greetings = "Hello World";
for (const greet of greetings) {
  if (greet === " ") {
    continue;
  }
  // console.log(`Value of each char is: ${greet}`);
}
//for of loop on map
const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("USA", "United States of America");
map.set("CHN", "China");
// console.log(map);
for (const [key] of map) {
  // console.log(key);
}
for (const [key, value] of map) {
  // console.log(key, ":", value);
}

//forof loop on object
const myObj = {
  name: "Hari",
  age: 32,
};
// for (const key of myObj) {
//   // console.log(key); TypeError: myObj is not iterable.
// }
