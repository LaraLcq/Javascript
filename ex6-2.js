class Rectangle {

	constructor (topLeftXPos,topLeftYPos,width,length){
		this.topLeftXPos = topLeftXPos;
		this.topLeftYPos = topLeftYPos;
		this.width = width;
		this.length =length;
	}
	collides(otherRectangle){
		return (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
	   this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
	   this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
	   this.length + this.topLeftYPos > otherRectangle.topLeftYPos); 

		}
	
}


let rect1 = new Rectangle (3,5,3,5);
let rect2 = new Rectangle (7,8,7,8);
console.log(rect1.collides(rect2)); //  crée un objet de type rectangle (rect1)
// rect2 créé un autre objet de type rectangle 
// en créant les objets on initialise les éléments.
// rentre en colision ? methode collides. Il prend en paramètre un rectangle.
/* dés qu'on crée un objet, on aura toutes les méthodes, attributs que j'ai définit dans la classe
this = rectangle courant objet.qlqchoses 
rect1.colides , this = rect1
rect1.collides = je dois donner un deuxième rectangle en paramètre pour tester si
j'entre en collision avec l'autre rectangle.  rect1.collides(rect2). */ 

/* console.log( ..... instanceof ..... ); // renverra true ou false */