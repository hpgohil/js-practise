//map method on Array

const myNums = [1, 2, 3, 4, 5];

// const newNums = myNums.map((num) => num + 10);

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);

console.log(newNums);
