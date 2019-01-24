const readlineSync = require("readline-sync");
var name = readlineSync.question ("What's the name of your favorite TVserie?");
var prod = readlineSync.question ("What's the production year of your favorite TVserie?");
var cast =[];
var answer;


do{
	answer = readlineSync.question ("Names of the cast members ? Write stop when it's ok");
	if (answer !== 'stop'){
		cast.push(answer);
	}
} while(answer !== 'stop');




let askTvSerie={
	"name": name,
	"prod": prod,
	"cast": cast

};

let randomizeCast=(TVserie)=>{
	for (var i = TVserie.cast.length-1; i >=0; i--) { // TVserie.cast.length = j'appelle mon objet dans mon tableau, pour la largeur de celui-ci
     
        var index2 = Math.floor(Math.random()*(i+1));  
         
        var temp = TVserie.cast[i]; 
        TVserie.cast[i] = TVserie.cast[index2]; // TVserie.cast précise le tableau qui est contenu dans l'objet TVserie 
        TVserie.cast[index2] = temp; // variable temp pour par pas perdre les éléments 
    }
    return TVserie.cast;
}

console.log(randomizeCast(askTvSerie));