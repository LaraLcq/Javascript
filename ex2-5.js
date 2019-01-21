const readlineSync = require("readline-sync");
let nb = parseInt(readlineSync.question("Quel est ton nombre favoris ?"));
while (nb!==42){
	nb = parseInt(readlineSync.question("Are you sure ? Try again"));
}

console.log ("nice");

