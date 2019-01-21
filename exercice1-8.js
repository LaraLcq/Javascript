const readlineSync = require("readline-sync");
let name = readlineSync.question ("Quel est ton prénom ?");
let addiction = readlineSync.question ("De quoi tu ne peux pas te passer ? ");
let wP= readlineSync.question ("à quel point ? ");
let crazy = readlineSync.question ("As-tu un animal ?");
let yN = readlineSync.question ("Le vendrais-tu pour avoir ton addiction en illimité ?")
console.log (name + " la grand accro à/au " + addiction + " possédant un " + crazy + " capable de le vendre " + yN + " L'hopital Psy est prévenu ");