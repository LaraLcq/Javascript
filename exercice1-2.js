const readlineSync = require("readline-sync");
let name = readlineSync.question ("What's your name ?");
let firstname = readlineSync.question ("Wath's your firstname ?");
let city = readlineSync.question ("Where do you live ?");
console.log ("You're name is " + name + firstname + "and you live in " + city);