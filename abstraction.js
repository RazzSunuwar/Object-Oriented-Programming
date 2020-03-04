// Constructor function

function Employee(name, age, baseSalary){
	this.name = name;
	this.age = age;
	this.baseSalary = baseSalary;
	let monthlyBonus = 1000;

	let calculateFinalSalary = function(){
		let finalSalary = baseSalary + monthlyBonus;
		console.log('Final Saalary is : '+ finalSalary);
	}

	this.getEmpDetails = function(){
		console.log('Name : '+this.name+' | Age : '+this.age);
		calculateFinalSalary();
	};
};

let em1 = new Employee('John', 30, 5000);
em1.getEmpDetails();
