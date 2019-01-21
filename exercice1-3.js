const readlineSync = require("readline-sync");
let firstName = readlineSync.question ("What's your firstname ?");
console.log("Hello " + firstName);