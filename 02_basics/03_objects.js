
const mySymbol = Symbol('123')

const myObj = {
    name: "Hari",
    age: 30,
    "full name": "Hari P Gohil",
    isLoggedIn : false,
    [mySymbol] : '123'
}

// console.log(typeof myObj);
// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj["name"]);
// console.log(myObj["full name"]);
// console.log(myObj[mySymbol]);


// Object.freeze(myObj) //can't edit, add, delete the properties
// myObj.name = "Ram";
// console.log(myObj);
// delete myObj.name;


// Object.seal(myObj) //can't add or delete the properties, but we can edit the existing properties
// myObj.name = "Ram";
// console.log(myObj);
// delete myObj.name;
// myObj.email = "hari@gohil.com"
// console.log(myObj);

myObj.greeting = function(){console.log("Hello JS User!");}

myObj.greetingTwo = function(){
    console.log(`Hello, JS User ${this.name}!!`);
}

console.log(myObj);
// console.log(myObj.greeting);
// console.log(myObj.greeting());
// console.log(myObj.greetingTwo);
// console.log(myObj.greetingTwo());
