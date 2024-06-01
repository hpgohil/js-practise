//filter method on Array (returs true values)
//since we are returning something from filter, map, reduce we need to store it in some variable...

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  return num > 4;
});
// const newNums = myNums.filter((num) => num > 4);

// console.log(newNums);

//[{}, {}, {}]

const books = [
  { title: "book one", genre: "History", publish: 1996 },
  { title: "book two", genre: "Science", publish: 2004 },
  { title: "book three", genre: "English", publish: 1993 },
  { title: "book four", genre: "Science", publish: 2007 },
  { title: "book five", genre: "History", publish: 2012 },
  { title: "book six", genre: "Culture", publish: 2020 },
];

const myBooks = books.filter((bk) => {
  return bk.genre === "History" && bk.publish >= 2007;
});
// console.log(myBooks);
