// Constructor function

function Employee(name, age, baseSalary){
	this.name = name;
	this.age = age;
	this.baseSalary = baseSalary;

	this.getEmpDetails = function(){
		console.log('Name : '+this.name+' | Age : '+this.age);
	};
};

let em1 = new Employee('John', 30, 5000);
em1.getEmpDetails();
