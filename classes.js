// class Employee{
// 	setDetails(name, id){
// 		this.name = name		//first name is class variable and second name is parameter of the function name
// 		this.id = id			//first id is id variable and second id is parameter of the function id
// 	}
// }

// let emp1 = new Employee('');
// emp1.setDetails('Uncle bob', 100);
// console.log(emp1.name);
// console.log(emp1.id);


// class Employee{
// 	constructor (name, id){
// 		this.name = name		//first name is class variable and second name is parameter of the function name
// 		this.id = id			//first id is id variable and second id is parameter of the function id
// 	}
// }

// let emp1 = new Employee('Uncle bob', 100);
// console.log(emp1.name);
// console.log(emp1.id);

// You are also free to make your own methods, the syntax should be familier:

// // EXAMPLE
// class Car {
// 	constructor (brand){
// 		this.carname = brand;
// 	}
// 	present(){
// 		return "I have a " + this.carname;
// 	}
// }

// mycar = new Car("Ford");
// console.log(mycar.present());


// EXAMPLE
// Send a parameter to the "present()" method:

// class Car {
// 	constructor (brand){
// 		this.carname = brand;
// 	}
// 	present(x){
// 		return x + ",I have a " + this.carname;
// 	}
// }

// mycar = new Car("Ford");
// console.log(mycar.present("Hello"));



// EXAMPLE
// Create a static method and call it on the class:

// class Car {
// 	constructor (brand) {
// 		this.carname = brand;
// 	}
// 	static hello() {
// 		return "Hello !!";
// 	}
// }

// mycar = new Car("Ford");
// console.log(Car.hello());

// Note: A static method is created with the "static" keyword, and you can only call the method on the class itself.


// If you want to use the mycar object inside the static method, you can use send it as parameter:


// class Car {
// 	constructor(brand){
// 		this.carname = brand;
// 	}

// 	static hello(x){
// 		return "Hello !! " + x.carname;
// 	}
// }
//  mycar = new Car("Ford")

//  console.log(Car.hello(mycar));


// 	EXAMPLE
// Create a class named "Model" which will inherit the methods from the "Car" class:

// class Car {
// 	constructor (brand) {
// 		this.carname = brand;
// 	}

// 	present(){
// 		return 'I have a ' + this.carname;
// 	}
// }

// class Model extends Car {
// 	constructor (brand, mod) {
// 		 super(brand);
// 		 this.model = mod;
// 	}
// 	show() {
// 		return this.present() + ', it is a ' + this.model;
// 	}
// }

// mycar = new Model("Ford", "Mustang");
// console.log(mycar.show());



// EXAMPLE
// Create a getter and a setter for the "carname" property:

// class Car {
// 	constructor (brand){
// 		this.carname = brand;
// 	}
// 	get cnam(){
// 		return this.carname;
// 	}
// 	set cnam(x) {
// 		this.carname = x;
// 	}
// }

// mycar = new Car ("Ford");
// console.log(mycar.cnam);

// Note: Even if the getter is a method, you do not use parentheses when you want to get the property value.


// Example

// You can use the underscore character to separate the getter/setter from the actual property:

// class Car {
// 	constructor (brand){
// 		this._carname = brand;
// 	}
// 	get carname(){
// 		return this._carname;
// 	}
// 	set carname(x) {
// 		this._carname = x;
// 	}
// }

// mycar = new Car ("Ford");
// console.log(mycar.carname);


// To use a setter, use the same syntax as when you set a propety value, without parenthesis.

// Example

// Use a setter to change the carname to "Buggati":

// class Car {
// 	constructor (brand){
// 		this._carname = brand;
// 	}
// 	get carname(){
// 		return this._carname;
// 	}
// 	set carname(x) {
// 		this._carname = x;
// 	}
// }

// mycar = new Car ("Ford");
// mycar.carname = "Buggati";
// console.log(mycar.carname);


// Example
// You cannot use the class yet.
// mycar = new Car("Ford")
// This would raise an error.

// class Car {
// 	constructor (brand){
// 		this.carname = brand;
// 	}
// }
// // Now you can use the class:
// mycar = new Car("Ford");
// console.log(mycar);

// Note: For other declarations, like functions, you will NOT get an error when you try to use it before
// it is declared, because the default behavior of JavaScript declarations are hoisting (moving the declaration
// to the top).

// Example
// In "strict mode" you will get an error if you use a variable without declaring it:

// Note: Javascript classes are written in "strict mode"

class Car{
	constructor (brand){
		i = 0;	
		this.carname = brand;
	}
}

mycar = new Car('Ferrari');
console.log(mycar);

// Note: Press F12 to see the error description in the console after executing the code in the browser. q