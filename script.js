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
		return this._width*this_height;
	}
}

class Square extends Animal {
	constructor(width,height,side){
		super(width,height);
		this._side = side;
	}
	getPerimeter(){
		return 4*this_side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
