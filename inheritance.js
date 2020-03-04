class Car{
	setName(name){
		this.name = name;
	}

	startEngine(){
		console.log('Engine started for '+this.name);
	}

	stopEngine(){
		console.log('Engine stopped for '+this.name);
	}

}

class Toyota extends Car{
	toSpeed(speed){
		console.log('The speed for '+this.name+' is '+speed);
	}
}

let myCar = new Toyota();
myCar.setName('Lamborgini');
myCar.startEngine();
myCar.stopEngine();
myCar.toSpeed(200);