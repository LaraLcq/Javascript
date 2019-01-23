const readlineSync = require("readline-sync");
var xa = readlineSync.question ("Entrez le X du point A");
var ya = readlineSync.question ("Entrez le Y du point A");
var xb = readlineSync.question ("Entrez le X du point B");
var yb = readlineSync.question ("Entrez le Y du point B");

let calcDistance=(x1,x2,y1,y2)=>{
	// sqrt( (Xb - Xa)^2 + (Yb-Ya)^2 )
	var deltaX = x2 - x1; //deltaX = (Xb - Xa) 
	var deltaY = y2 - y1; //deltaY = (Yb-Ya)

	return Math.sqrt(Math.pow(deltaX,2) + (Math.pow(deltaY, 2))); // sqrt (deltaX^2 + deltaY^2)
}
console.log(calcDistance(xa,xb,ya,yb));


// l'ordre d'appel de données est important


