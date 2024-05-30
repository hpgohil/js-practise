// "use strict";
// console.log(this);

function x() {
  console.log(this);
}
// x();
// window.x();

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};
obj.x();


const myObj = {
  username: "Hari",
  age: 30,
  welcomeMessage: function () {
    console.log(`Welcome, ${this.username}`);
    // return `Welcome, ${myObj.username}`;
  },
};
// console.log(myObj);
// console.log(myObj.welcomeMessage());
// myObj.username="Ram";
// console.log(myObj.welcomeMessage());
myObj.welcomeMessage;
// myObj.welcomeMessage();

myObj.username = "Ram";
// myObj.welcomeMessage();

function chai() {
  console.log(this); // a big object
}
// chai();

function one() {
  const user = "Hari";
  console.log(this.user); //undefined
}
// one();

const two = function () {
  console.log(this); //a big object
  const username = "Someone";
  console.log(this.username); //undefined
};
// two();

const three = () => {
  console.log(this); //{}
  const username = "Krishna";
  console.log(this.username); //undefined
};
// three();
