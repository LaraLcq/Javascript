const readlineSync = require("readline-sync");
var name = readlineSync.question ("What's the name of your favorite TVserie?");
var prod = readlineSync.question ("What's the production year of your favorite TVserie?");
var cast =[];
var answer;


 /* while (condition){
	instructions
} */

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

console.log(askTvSerie);