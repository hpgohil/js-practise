const app = function () {
  console.log("hi");
};

const apps = function () {
  console.log("hi");
};

function sayMyName(username) {
  console.log(`${username}, how are you!`);
  return;
}

sayMyName; //just a function reference; it won't execute a function. just shows the address of function.
// sayMyName("Manjeet");
const result = sayMyName("Hari");

//since the function sayMyName() doesn't return any value, when we store the function call in a variable, the variable doesn't have any value to store in. Hence, when we log that variable, we get "undefined". If a function returns a value (eg. return 8+2), then that value (10) will be stored in a variable. & when we log that variable, we get 10 stored in that variable.

// console.log(result);

function myName() {
  if (name === undefined) {
    console.log("Please enter your name");
    return;
  }
}

function happyBirthday(name, age) {
  console.log(`Hey, ${name}!!! Wishing you a very happy birthday!!! 
  Congratulations!!! You turned ${age} today...!!!
  Prayers in the divine feet of Lord Swaminarayan and SwamiBapa for your prosperity and good health!!!
  Jai Swaminarayan`);
}

// happyBirthday("Ruchi", 22);
