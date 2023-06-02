class Form{
	form = document.getElementById("myForm");

	addElement(){
		return true
	}

	removeElement(){
		return true
	}
}

class Inputs extends Form{
	constructor(name, value){
		super();
		this.name = name;
		this.value = value;
	}
	addElement(){
		this.newInput = document.createElement("input");
		this.form.appendChild(newInput);
	}

	removeElement(){
		this.lastInput = this.form.lastElementChild;
		this.form.removeChild(this.lastInput);
	}
}

class Text extends Inputs{
	constructor(){
		super();
		this.type = "text";
		this.placeholder = "Type some text";
	}

	addElement(){
		this.newInput = document.createElement("input");
		this.newInput.type = this.type;
		this.newInput.name = this.name;
		this.newInput.placeholder = this.placeholder;
		this.form.appendChild(this.newInput);
	}
}

class Checkbox extends Inputs{
	constructor(){
		super();
		this.type = "checkbox";
		this.state = false;
	}

	addElement(){
		this.newInput = document.createElement("input");
		this.newInput.type = this.type;
		this.newInput.checked = this.state;
		this.form.appendChild(this.newInput);

		this.newLabel = document.createElement("label");
		this.newLabel.textContent = "Чекбокс";
		this.form.appendChild(this.newLabel);
	}

}

class CompoundInputs extends Inputs{
	constructor(){
		super();
		this.elements = [];
	}

	addElement(element){
		this.elements.push(element);
	}
	
	drawElements(){
		console.log(this.elements)
		this.elements.forEach(elem => elem.addElement());
	}
}


function addToForm(){
	const text = new Text();
	const checkbox = new Checkbox();
	text.addElement();
	checkbox.addElement();

	const group = new CompoundInputs();
	group.addElement(text);
	group.addElement(checkbox);
	group.addElement(text);
	group.drawElements();

}

function removeBtn() {
	const inputs = new Inputs();
	inputs.removeElement();
}

