const readlineSync = require("readline-sync");
let age = readlineSync.question ("Quel âge as-tu ?")
if (age >= 18){
	console.log ("You are an adult");
} else {
	console.log ("You are no yet an adult");
}