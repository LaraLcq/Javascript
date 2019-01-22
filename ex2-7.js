const readlineSync = require("readline-sync");
let n = readlineSync.question ("Entrez un nombre");
let nb = 0;

for (n; n>0 ; n--) {
	nb += parseInt(readlineSync.question("Entrez un nombre"));

}

console.log(nb)













