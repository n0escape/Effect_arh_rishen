const BILL = 300;
document.getElementById("bill").innerHTML = BILL;

function getSelectedValue() {
	var select = document.getElementById("mySelect");
	var selectedValue = select.options[select.selectedIndex].value;
	console.log("Выбрано значение: " + selectedValue);

	getPriceByDelivery(selectedValue);
}

function pickupStrategy(amount) {
	return amount;
};

function externalServiceStrategy(amount) {
	return amount * 1.25;
};

function ownServiceStrategy(amount) {
	return amount * 1.2;
};

class FoodDelivery {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
};

const pickup = new FoodDelivery(pickupStrategy);
const externalService = new FoodDelivery(externalServiceStrategy);
const ownService = new FoodDelivery(ownServiceStrategy);

function getPriceByDelivery(value) {
	switch (value) {
		case "Pickup":
			pickup.setAmount(BILL);
			return document.getElementById("billWithServise").innerHTML = pickup.checkout();
		case "External service":
			externalService.setAmount(BILL);
			return document.getElementById("billWithServise").innerHTML = externalService.checkout();
		case "Own service":
			ownService.setAmount(BILL);
			return document.getElementById("billWithServise").innerHTML = ownService.checkout();
		default:
			return "something wrong";
	}
}