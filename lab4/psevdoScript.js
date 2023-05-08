class Strategy {
	constructor(){
		//something
	}
}

class PickupStrategy extends Strategy{
	calculate(amount){
		return amount;
	}
}

class ExternalServiceStrategy extends Strategy{
	calculate(amount){
		return amount * 1.25;
	}
}

class OwnServiceStrategy extends Strategy{
	calculate(amount){
		return amount * 1.3;
	}
}

class Context{
	constructor(amount){
		this.strategy = new Strategy(amount);
	}

	setStrategy(strategy){
		this.strategy = strategy;
	}

	calculateStrategy(amount){
		return this.strategy.calculate(amount);
	}
}

function getSelectedValue() {
	var select = document.getElementById("mySelect");
	var selectedValue = select.options[select.selectedIndex].value;
	console.log("Выбрано значение: " + selectedValue);

	return selectedValue;
}

class App{
	main(bill){
		this.context = new Context(this.bill);
		this.bill = bill;

		this.value = getSelectedValue();

		switch (this.value) {
			case "Pickup":
				this.context.setStrategy(new PickupStrategy);
				return document.getElementById("billWithServise").innerHTML = this.context.calculateStrategy(this.bill);
			case "External service":
				this.context.setStrategy(new ExternalServiceStrategy);
				return document.getElementById("billWithServise").innerHTML = this.context.calculateStrategy(this.bill);
			case "Own service":
				this.context.setStrategy(new OwnServiceStrategy);
				return document.getElementById("billWithServise").innerHTML = this.context.calculateStrategy(this.bill);
			default:
				return "something wrong";
		}
	}
}

const BILL = 300;

document.getElementById("bill").innerHTML = BILL;

function start() {
	const app = new App;
	app.main(BILL);
}