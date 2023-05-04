class Memento {
	constructor(value) {
		this.value = value;
	}
};

const creator = {
	save: val => new Memento(val),
	restore: memento => memento.value,
};

class Caretaker {
	constructor() {
		this.values = [];
	}

	addMemento(memento) {
		this.values.push(memento);
	}

	getMemento(index) {
		return this.values[index];
	}
	
	undo() {
		if ( this.values.length != 0 ) {
			let memento = this.values.pop();
			return memento;
		} else {
			console.log("there is nothing to delete")
		}
	}

	showHistory() {
		console.log("There is the list of mementos:");
		let i = 1
		for( i in this.values) {
			console.log(this.getMemento(i));
		}
	}
};

const careTaker = new Caretaker();

// careTaker.addMemento(creator.save("Hello"));
// careTaker.addMemento(creator.save("Hello wo"));
// careTaker.addMemento(creator.save("Hello world 1"));
// careTaker.addMemento(creator.save("Hello world 2"));
// careTaker.addMemento(creator.save("Hello world 3"));

// careTaker.showHistory();
//careTaker.undo();
//careTaker.showHistory();

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const saveButton = document.querySelector('#save-button');
saveButton.addEventListener('click', () => {
	const checkboxStates = {};
	checkboxes.forEach((checkbox) => {
		checkboxStates[checkbox.id] = checkbox.checked;
	});
	console.log(checkboxStates);
	careTaker.addMemento(creator.save(checkboxStates));
});

const historyButton = document.querySelector('#history-button');
historyButton.addEventListener('click', () => {
	careTaker.showHistory();
});

const undoButton = document.querySelector('#undo-button');
historyButton.addEventListener('click', () => {
	careTaker.undo();
});