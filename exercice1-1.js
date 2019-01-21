const readlineSync = require("readline-sync");
let userAge = readlineSync.question('Can you give me your age please ?');
console.log ("You're" + userAge);