class ParentClass{

	constructor(essence, parameter, info) {
		this.essence = essence;
		this.parameter = parameter;
		this.info = info;
	}

	newEvent(){
		this.getInfo(this.essence);

		if (this.validationData(this.parameter)){
			this.result = this.saveInfo(this.essence, this.info);
			// ...
			this.result = this.beforeReturn(this.result);
			this.returnStatus(true);
			this.afterReturn();
			return this.result;
		}else {
			this.returnStatus(false);
		}


		return false;
	}

	getInfo(essence){
		console.log(`We change ${essence}`);
	}

	validationData(){
		return true;
	}

	saveInfo(){
		return true;
	}

	returnStatus(status){
		if(status){
			console.log("Returning " + status + " - means everything fine")
		}else{
			console.log("Returning " + status + " - means something wrong")
		}
	}

	//--------------cookie--------------
	beforeReturn(result){
		return result;
	}

	afterReturn(){

	}

}

class Product extends ParentClass{
	validationData(parameter){
		switch(parameter) {
			case true:
				console.log(`Validation success`);
				return true;
			case false:
				console.log(`Validation failure`);
				console.log(`Calling admin`);
				console.log(`Sanding wrong parameter: ${parameter}`);
				return false;
			default:
				return false;
		}
	}

	saveInfo(essence, info){
		console.log(`Saving info...`)
		console.log(`Saving info about ${essence}`)
		console.log(`Info to save: ${info}`)
	}

}

class User extends ParentClass{
	_emailPatern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	_staticEmail = "example@gmail.com";

	validationData(_staticEmail){
		console.log("Ignoring typed email");
		console.log("Using static email");

		if (this._staticEmail.match(this._emailPatern)) {
			console.log(`Valid email address!`);
			return true;
		}else{
			console.log(`Wrong email address!`);
			return false;
		}
	}

	saveInfo(essence, info){
		console.log(`Saving info...`)
		console.log(`Saving info about ${essence}`)
		console.log(`Info to save: ${info}`)
	}
}

class Order extends ParentClass{
	_emailPatern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	validationData(email){
		console.log("Using typed email");

		if (email.match(this._emailPatern)) {
			console.log(`Valid email address!`);
			return true;
		}else{
			console.log(`Wrong email address!`);
			return false;
		}
	}

	saveInfo(essence, info){
		console.log(`Saving info...`)
		console.log(`Saving info about ${essence}`)
		console.log(`Info to save: ${info}`)
	}

	returnStatus(status){
		if(status){
			console.log("Returning " + status + " - means everything fine");
			console.log("Creating JSON with deatils of order");
			console.log(`Sending deatils: ${this.essence}, ${this.parameter}, ${this.info}`);
		}else{
			console.log("Returning " + status + " - means something wrong")
		}
	}
}


const test = new Product("box", false, "Description about box");
const testUser = new User("name", "valid@mail.com", "Description about user");
const testOrder = new Order("nameUser", "valid@mail.com", "Description about order");

test.newEvent();
console.log("///////////////////////");
testUser.newEvent();
console.log("///////////////////////");
testOrder.newEvent();