//var message = "in global";
//console.log("Global message is: " + message)

//var a = function () {
//	var message = "inside a"
//	console.log("a: message = " + message)
	

// function b () {
//	console.log("b: message ="+message)
//	}
//	b();
//}

// var x;
// //console.log (x);
// if (x==undefined) {
// 	console.log("x is undefined")}
// x=5;
// if (x==undefined) {
// 	console.log("x is undefined")
// }
// else {
// 	console.log("x is defined")
// }

// var string = "Hello";
// string += " World!";
// console.log(string + "!!!!!");


// console.log((5+4)/9);

// var x = 10, y = 22, z = 13.4

// if (y/x == 2) {
// 	console.log("y is divisible by x")
// }

// else {
// 	console.log("y is not divisible by x")
// }

// if (Number.isInteger(z/x)) {
// 	console.log("z is divisible by x");}
// 	else {
// console.log("z is not divisble by x")}




// var SUM = 1;
// for (i=0; i<101; i++) {
// 	SUM = SUM + i
// };

// console.log("Sum from 1 to 100 is " + SUM);

// function makeMultiplier(multiplier) { 
// 	var myFunction = function (x) { 
// 		return multiplier * x; 
// 	};
// 	return myFunction; 
// };

// var multiplyby2 = makeMultiplier(2);
// console.log(multiplyby2(10));

// function createdivisor (divisor) {
// 	var whatimdividing = function (x){
// 		return x / divisor 
// 	};
// 	return whatimdividing;
// };

// var divideby1 = createdivisor(1);
// console.log("Dividing 10 by 1 gives " + divideby1(10));
// var divideby2 = createdivisor(2);
// console.log("Dividing 10 by 2 gives " + divideby2(10));
// var divideby5 = createdivisor(5);
// console.log("Dividing 10 by 5 gives " + divideby5(10));


// var a = {x:500};
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 1000;
// console.log(a);
// console.log(b);

// function changeObject(objValue) {
//   console.log("in changeObject...");
//   console.log("before:");
//   console.log(objValue);
  
//   objValue.x = 5;
//   console.log("after:");
//   console.log(objValue);
// };

// value = { x: 7 };
// changeObject(value); // objValue = value
// console.log("after changeObject, orig value:");
// console.log(value);

// function Rectangle (width,length) {
// 	this.width = width;
// 	this.length = length;
// };

// Rectangle.prototype.getArea = 
// 	function () {
// 		return this.length * this.width
// 	};

// var firstRec = new Rectangle(2,10);
// console.log(firstRec.getArea());


function makeMultiplier (multiplier) {

	var myNum = function (x){return x * multiplier
	};

	return myNum;
};


var multiplyby2 = makeMultiplier (2);
console.log(multiplyby2(3));




