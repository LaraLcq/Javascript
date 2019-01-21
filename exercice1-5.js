const readlineSync = require("readline-sync");
let nbr1 = readlineSync.question ("Introduis un nombre décimal");
let nbr2 = readlineSync.question ("Introduis un autre nombre décimal ");
let totalNbr = parseInt (nbr1) * parseFloat (nbr2);
console.log(nbr1 * nbr2);
