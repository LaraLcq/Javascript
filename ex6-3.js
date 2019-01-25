class Rectangle {

	constructor (topLeftXPos,topLeftYPos,width,length){
		this.topLeftXPos = topLeftXPos;
		this.topLeftYPos = topLeftYPos;
		this.width = width;
		this.length =length;
	}
	collides(otherRectangle){
		return(this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
	   this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
	   this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
	   this.length + this.topLeftYPos > otherRectangle.topLeftYPos);
	}
	/* var topLeftXPos = Math.floor(Math.random() * 1000;
    var topLeftYPos = Math.floor(Math.random() * 1000; */
	
}

// console.log(rect1.collides(rect2)); 

function thousandRect() {
let myObject = {
	rect :[]
}
	for (i = 0; i <= 999; i++){
		myObject.rect[i] = new Rectangle (Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000));
	console.log(i);
	}

//collapse test
	for (i = 0; i <= 999; i++){
		for (j = 0; j <= 999; j++){
			if(i != j){
				console.log("rect: " + i + " vs: " + j);
				console.log(myObject.rect[i].collides(myObject.rect[j]));
			}
		}
	}
}
thousandRect();