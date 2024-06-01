const isLoggedIn = true;

if (isLoggedIn) {
  console.log("User logged in");
} else {
  console.log("Please enter user credentials");
}

//falsy values

// false, 0, -0, BigInt 0n, null, undefined, NaN

//Rest all values are truthy values
//truthy values examples

//"0", "false", [], {}, function(){}

//Ternary Opearators

const isSignedIn = true;

isSignedIn
  ? console.log("Logged In")
  : console.log("Enter credentials to sign in");
