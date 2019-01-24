class Rectangle {

	constructor (topLeftXPos,topLeftYPos,width,length){
		this.topLeftXPos = topLeftXPos;
		this.topLeftYPos = topLeftYPos;
		this.width = width;
		this.length =length;
	}
	collides(otherRectangle){
		if(this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
	   this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
	   this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
	   this.length + this.topLeftYPos > otherRectangle.topLeftYPos);

	   return Math.floor(Math.random() * 1000

		}
	/* var topLeftXPos = Math.floor(Math.random() * 1000;
    var topLeftYPos = Math.floor(Math.random() * 1000; */
	
}


let rect1 = new Rectangle ();
let rect2 = new Rectangle ();
console.log(rect1.collides(rect2)); 