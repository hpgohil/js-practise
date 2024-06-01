//reduce method on array

const myNums = [1, 2, 3, 4, 5];

// const newNums = myNums.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, number);

const newNums = myNums.reduce((acc, curVal) => acc + curVal, 0);

// console.log(newNums);

//[{}, {}, {}]

const products = [
  { itemName: "t-shirt", price: 2999 },
  { itemName: "trouser", price: 1999 },
  { itemName: "watch", price: 5999 },
];

const myTotal = products.reduce((acc, items) => acc + items.price, 0);
console.log(myTotal);
