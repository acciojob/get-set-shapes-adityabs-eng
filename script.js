//complete this code
class Rectangle {
	constructor(width , height){
		this._width = width ;
		this._height = height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	getArea(){
		let area = this._width*this._height;
		return area;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side , side);
		this._side = side;
	}
	getPerimeter(){
		let perimeter = 4*this._side;
		return perimeter;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
