const readlineSync = require("readline-sync");
let min = readlineSync.question ("Entrez un nombre");
let max = readlineSync.question ("Entrez un nombre");
let current = readlineSync.question ("Entrez un nombre");
if ((current < max) && (current > min)){
	console.log(current);
} else if (min > max) {
	console.log ("ERROR, you don't have understand the exercice, please exit the program")
} else {
	console.log ("GREAT OMG ! GENIUS");
}

	

