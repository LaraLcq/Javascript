const readlineSync = require("readline-sync");
var choix = readlineSync.question ("Entrez combien de nombres aléatoires vous voulez");

let average=(arr)=>{
	let sum = 0
	for (let i=0; i<arr.length; i++){
		sum += arr[i] // prends dans le tableau arr à la position i pour obtenir une valeur, additionnée dans sum
		//sum += 5 => sum = sum + 5 fonction pareil avec -= *=. /= 


	}
	return sum / arr.length; // valeur de sum divisée par la taille physique du tableau 

}


let min=(arr)=>{
	return Math.min(...arr);

}

let max=(arr)=>{
	return Math.max(...arr); 
}

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

let arr = multiRand(choix);
console.log(arr); // permets de vérifier le programme, avec le tableau affiché 
console.log(average(arr));
console.log(min(arr));
console.log(max(arr));

