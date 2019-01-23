const readlineSync = require("readline-sync");
var a = readlineSync.question ("Entrez un nombre");

let factorial=(a)=>{ 

    if(a < 0) {
        return -1;
    }
    else if(a === 0) {
        return 1;
    } else {
        return a * factorial(a-1);
    }
}

console.log(factorial(a));
