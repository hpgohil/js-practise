function one() {
  const username = "Hari";

  function two() {
    const website = "YouTube";
    console.log(username);
  }

  // console.log(website);

  two();
}

// one();

if (true) {
  const username = "Harikrishna";
  if (username === "Harikrishna") {
    const website = "YouTube";
    console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

// Function Definition

console.log(calculate(3, 5)); //can access function definition before its initialization

function calculate(num1, num2) {
  return num1 + num2;
}

//Function Expression

// console.log(addTwo(4, 2)); //can't access addTwo() before its initialization

const addTwo = function (no1, no2) {
  return no1 + no2;
};
