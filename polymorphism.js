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
		console.log(this.name+' eats grass');
	}
}

let grass = new Rabbit('Hare');
grass.eats();			
