const arrTime1 = ["9:00","10:00","11:00","12:00","13:00"],
			arrTime2 = ["14:00","15:00","16:00","17:00","18:00"];

class Mediator{
	notify(sender, event){
		//
	}
}

class ConcreteMediator extends Mediator{
	constructor(comp1, comp2){
		super();
		this.component1 = comp1;
		this.component1.setMediator(this);

		this.component2 = comp2;
		this.component2.setMediator(this);
	}

	notify(sender, event){
		let name = sender.getName();
		switch(event){
			case "A":
				console.log(`Component: ${name}. trigger A func`);
				//при виклику А - встановлюємо варіанти часу для елемента select з масиву arrTime1
				break;
			case "B":
				console.log(`Component: ${name}. trigger B func`);
				//при виклику B - встановлюємо варіанти часу для елемента select з масиву arrTime2
				break;
			case "C":
				console.log(`Component: ${name}. trigger C func`);
				//створення полів Ім'я та Телефону іншого одержувача у формі
				break;
			case "D":
				console.log(`Component: ${name}. trigger D func`);
				//видалення полів Ім'я та Телефону іншого одержувача з форми
				break;
			default:
				console.log("Wrong case");
		} 
	}
}

class BaseComponent{
	constructor(name){
		this.name = name;
	}
	
	setMediator(mediator){
		this.mediator = mediator;
	}

	getName(){
		return this.name;
	}
}

class Component1 extends BaseComponent{
	doA(){
		this.mediator.notify(this,"A");
	}

	doB(){
		this.mediator.notify(this,"B");
	}
}

class Component2 extends BaseComponent{
	doC(){
		this.mediator.notify(this,"C");
	}
	doD(){
		this.mediator.notify(this,"D");
	}
}

let c1 = new Component1("1");
let c2 = new Component2("2");
let mediator = new ConcreteMediator(c1, c2);

console.log("Client trigger A");
c1.doA();
console.log("Client trigger C");
c2.doC();

const saveButton = document.querySelector('#save-button');
saveButton.addEventListener('click', () => {
	// отримуємо данні форми після натискання на кнопку
});

function dateSelected(){
	//виловлювємо вибір дати, при зміні поля select
	//передаємо встановлене значення у змінну date (день місяця)
	//викликаємо функцію varietyOfDate(date), передаючи параметр дати,
	//у функції виконуємо певні дії в залежносі від переданого числа
}

function varietyOfDate(){
	//перевіряємо, яку дату було обрано:
	//при парній - викликаємо doA (першої компоненти)
	// c1.doA()
	//при непарній - викликаємо doB (першої компоненти)
	// c2.doB()
}

const formID = document.getElementById('formID')
const differetReceiver = formID.querySelector('#differet-receiver');

differetReceiver.addEventListener('change', (event) => {
	// виловлюємо зміну checkbox
	if (event.target.checked) {
    // Checkbox було відмічено
    // відображаємо поля Ім'я та Телефон які є обов'язковими (з атрибутом required)
		// за допомогою виклику функції doC (другої компоненти)

		//c2.doC();
  } else {
    // Checkbox було знято
    // призовуємо поля Ім'я та Телефон які є обов'язковими (з атрибутом required)
		// за допомогою виклику функції doD (другої компоненти)
		
		//c2.doD();
  }
});