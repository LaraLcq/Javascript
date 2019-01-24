class Circle {

	constructor(xPos,yPos,radius){
		this.xPos = xPos;
		this.yPos = yPos;
		this.radius = radius;
	}

	set move(xOffset){
		this.xPos += xOffset;
	}

	set move(yOffset){
		this.yPos += yOffset;
	}
	get surface() {
		return Math.PI * Math.pow(this.radius,2); 

	}
}
let cercle = new Circle (4,7,8);
console.log (cercle.surface);



