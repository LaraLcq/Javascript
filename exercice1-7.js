const readlineSync = require("readline-sync");
let shoeSize = readlineSync.question ("Introduis ta pointure");
let bdYear = readlineSync.question ("Introduis l'année de ta naissance");
console.log(((shoeSize * 2 + 5) * 50) - bdYear + 1766);