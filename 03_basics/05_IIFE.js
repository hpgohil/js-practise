//named IIFE
(function dbConnection() {
  console.log("DB Connected!");
})();

//un-named IIFE
(() => {
  console.log("DB Connected Again!");
})();

( (username) => {
    console.log(`DB Connected, ${username}!`);
} )("Harikrishna");
