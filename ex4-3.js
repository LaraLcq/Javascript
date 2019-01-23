const readlineSync = require("readline-sync");
var choix = readlineSync.question ("Entrez un nombre");
let rand10 =()=>{

	var nb = (Math.random() * (10) + 1 ); // random donne un nombre entre 0 et 1 > il donnera 0 à 9,9 donc (10) + 1 pour avoir 10 et de 
	return Math.floor(nb);
}

let multiRand=(n)=>{
	let arr=[] // je crée un tableau
	for (let i=0; i<n; i++){ // initialise i à 0  , incrémenté i pour faire x tour que le n boucler tant que i est plus petit que n 
	
		arr.push(rand10()); // push un élément généré aléatoirement par la fonction rand10 dans le tableau arr 
	}

	return arr; // renvoie le tableau
}


console.log(multiRand(choix)); // le choix sera le choix de l'user appelé 