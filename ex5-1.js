const readlineSync = require("readline-sync");
var name = readlineSync.question ("What's the name of your favorite TVserie?");
var prod = readlineSync.question ("What's the production year of your favorite TVserie?");
var cast = readlineSync.question ("Names of the cast members ?");
/*
let askTvSerie=(name,prod,cast) => {
	"name": name,
	"prod": prod,
	"cast": cast

};*/
let askTvSerie={
	"name": name,
	"prod": prod,
	"cast": cast

};

console.log(askTvSerie);