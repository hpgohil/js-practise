const newNumber = new Number(100);
// console.log(typeof newNumber);
// console.log(newNumber);
// console.log(newNumber.toFixed(4));
// console.log(newNumber.toPrecision(5));


const number = 123456.789

// console.log(number.toFixed(2));
// console.log(number.toPrecision(3));
// console.log(number.toPrecision(6));
// console.log(number.toPrecision(7));
// console.log(number.toLocaleString("en-IN", {style:"currency", currency:"INR", 
// // maximumSignificantDigits:4,
//  maximumFractionDigits:1}));


//+++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.ceil(4.53));
// console.log(Math.ceil(4.13));
// console.log(Math.ceil(-4.93));
// console.log(Math.ceil(-4.13));

// console.log(Math.floor(4.53));
// console.log(Math.floor(4.23));
// console.log(Math.floor(-4.53));
// console.log(Math.floor(-4.13));

// console.log(Math.round(4.53));
// console.log(Math.round(4.33));
// console.log(Math.round(-4.53));
// console.log(Math.round(-4.13));



// console.log(Math.ceil(Math.random() * 10)); // 10 inclusive in result
// console.log(Math.floor(Math.random() * 10)); // 10 exclusive in result

//Getting a random number  between two values
const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max-min) + min))) // min inclusive, max exclusive
console.log(Math.ceil((Math.random() * (max-min) + min))) // min exclusive, max inclusive
console.log(Math.floor((Math.random() * (max-min+1) + min))) // both min & max are inclusive








