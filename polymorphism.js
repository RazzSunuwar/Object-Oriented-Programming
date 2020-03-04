class Animal{

	constructor(name){
		this.name = name;
	}

	eats(){
		console.log(this.name+' eats food');
	}
}

let animal = new Animal('Dog');
animal.eats();