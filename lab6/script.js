class Component{
	accept(visitor){}
}

class Company extends Component{
	departments = []

	constructor(departments){
			super()
			this.departments = departments
	}

	accept(visitor){
			visitor.visitCompany(this)
	}
}

class Department extends Component{
	employees = []

	constructor(employees){
			super()
			this.employees = employees
	}

	accept(visitor){
			visitor.visitDepartmen(this)
	}
}

class Employee{
    name = ""
    salary = 0

    constructor(name, salary){
        this.name = name
        this.salary = salary
    }
}

class Visitor{
	visitDepartmen(component){
		console.log(`Department salary`);
		for (let i = 0; i < component.employees.length; i++){
			console.log( component.employees[i].name + " with salary " + component.employees[i].salary )
		}
	}

	visitCompany(component){
			console.log(`Company report`);
			for (let i = 0; i < component.departments.length; i++){
				for (let j = 0; j <  component.departments[i].employees.length; j++){
						console.log(component.departments[i].employees[j].name + " with salary " 
												+ component.departments[i].employees[j].salary)
				}
		}
	}
}

let employee1 = new Employee('pos_1', 200)
let employee2 = new Employee('pos_2', 250)
let employee3 = new Employee('pos_3', 300)
let employee4 = new Employee('pos_4', 350)

let department1 = new Department([employee1, employee3]);
let department2 = new Department([employee2, employee4]);

let company = new Company([department1, department2]);

let visitor = new Visitor();
department1.accept(visitor);
department2.accept(visitor);
company.accept(visitor);