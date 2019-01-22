const readlineSync = require("readline-sync");
let nb = readlineSync.question ("Entrez un nombre entre 1 et 7");

var first = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
	

	while (nb > 7 || nb <=0){
		console.error("Error , introduisez un nombre entre 1 et 7");
		nb = readlineSync.question ("Entrez un nombre entre 1 et 7");
	}
	console.log(first[nb-1]);



