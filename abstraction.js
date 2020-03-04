// Constructor function

function Employee(name, age, baseSalary){
	this.name = name;
	this.age = age;
	this.baseSalary = baseSalary;
	this.monthlyBonus = 1000;

	this.calculateFinalSalary = function(){
		let finalSalary = this.baseSalary + this.monthlyBonus;
		console.log('Final Saalary is : '+ finalSalary);
	}

	this.getEmpDetails = function(){
		console.log('Name : '+this.name+' | Age : '+this.age);
	};
};

let em1 = new Employee('John', 30, 5000);
em1.getEmpDetails();
em1.calculateFinalSalary();
