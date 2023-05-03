//ітератор який вивидить масив поступово
class PlacesIterator {
	constructor(el) {
		this.index = 0;
		this.elements = el;
	}

	next() {
		return this.elements[this.index++];
	}

	hasNext() {
		return this.index < this.elements.length;
	}
};

let currentLocation = "Kharkiv";
const mainCollection = [
	{ name: "Володимирська гірка", locate: "Kiyv", popularity: 3 },
	{ name: "Високий замок", locate: "Lviv", popularity: 4 },
	{ name: "Площа Свободи", locate: "Kharkiv", popularity: 5 },
	{ name: "Парк імені Горького", locate: "Kharkiv", popularity: 5 },
	{ name: "Ботанічний сад", locate: "Kharkiv", popularity: 3 },
	{ name: "Монастирський острів", locate: "Dnipro", popularity: 5 },
	{ name: "Сквер Героїв", locate: "Dnipro", popularity: 2 }
];

//на власний россуд туриста
//випадкові 4 без повторів
console.log("----------------first----------------");
let touristPickArray = [];

for (let i = 0; i < 4; i++) {
	let randIndex = Math.floor(Math.random() * mainCollection.length);
	let randElement = mainCollection[randIndex];
  if (!touristPickArray.includes(randElement)) {
    touristPickArray.push(randElement);
  }
}

const touristPickCollection = new PlacesIterator (touristPickArray);
while(touristPickCollection.hasNext()) {
	console.log(touristPickCollection.next());
}
//за рекомендаціями навігатора
//усі на вказацій локації за абеткою
console.log("----------------second----------------");
let navigatorPickArray = [];

for (index in mainCollection) {
	if (mainCollection[index].locate == currentLocation) {
		navigatorPickArray.push(mainCollection[index])
	}
}
navigatorPickArray.sort((a, b) => a.name.localeCompare(b.name));

const navigatorPickCollection = new PlacesIterator (navigatorPickArray);
while(navigatorPickCollection.hasNext()) {
	console.log(navigatorPickCollection.next());
}

//за допомогою місцевого гіда
//випадкові 2 місця на вказаній локації
console.log("----------------third----------------");
let locetedArray = [];
let guidePickArray = [];

for (index in mainCollection) {
	if (mainCollection[index].locate == currentLocation) {
		locetedArray.push(mainCollection[index])
	}
}
for (let i = 0; i < 2; i++) {
	let randIndex = Math.floor(Math.random() * locetedArray.length);
	let randElement = locetedArray[randIndex];
  if (!guidePickArray.includes(randElement)) {
    guidePickArray.push(randElement);
  }
}

const guidePickCollection = new PlacesIterator (guidePickArray);
while(guidePickCollection.hasNext()) {
	console.log(guidePickCollection.next());
}