class Animal{

	constructor(name){
		this.name = name;
	}

	eats(){
		console.log(this.name+' eats food');
	}
}

class Rabbit extends Animal{
	eats(){
		super.eats();	//This call the parent class
		console.log(this.name+' eats grass');
	}
}

let grass = new Rabbit('Hare');
grass.eats();			
