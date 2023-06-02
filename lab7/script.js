//---------Singleton pattern for PostgreSQL
class PostgreSQL{
	//test on existing copies, and if they are here, return them
	constructor(){
			if(typeof PostgreSQL.instance === 'object'){
					return PostgreSQL.instance
			}
			this.countCalls = 0;
			PostgreSQL.instance = this;
			return this;
	}
	//return total number of calling DB
	getCount(){return `Total using PostgreSQL was ${this.countCalls}`}
	//function is about calling DB (calculate calling DB)
	increaseCount(){
			this.countCalls++
			console.log(`You are used PostgreSQL ${this.countCalls} time(s)`);
			return this.countCalls;
	}
}

//---------Singleton pattern for MongoDB
//---------the same as PostgreSQL
class MongoDB{
	constructor(){
			if(typeof MongoDB.instance === 'object'){
					return MongoDB.instance
			}
			this.countCalls = 0;
			MongoDB.instance = this;
			return this;
	}

	getCount(){return `Total using MongoDB was ${this.countCalls}`}

	increaseCount(){
			this.countCalls++
			console.log(`You are used MongoDB ${this.countCalls} time(s)`);
			return this.countCalls
	}
}

//making copies from one class
let postgreSQL1 = new PostgreSQL();
let postgreSQL2 = new PostgreSQL();
//test them on calls
console.log(postgreSQL1.getCount()); //0
console.log(postgreSQL2.getCount()); //0
//making calls from different copies
postgreSQL1.increaseCount();
postgreSQL1.increaseCount();
postgreSQL2.increaseCount();
postgreSQL2.increaseCount();
//using one DB from different copies
console.log(postgreSQL1.getCount()); //4
console.log(postgreSQL2.getCount()); //4


let mongoDB1 = new MongoDB();
let mongoDB2 = new MongoDB();
console.log(mongoDB1.getCount()); //0
console.log(mongoDB2.getCount()); //0
mongoDB1.increaseCount();
mongoDB1.increaseCount();
mongoDB2.increaseCount();
mongoDB2.increaseCount();
mongoDB2.increaseCount();
console.log(mongoDB1.getCount()); //5
console.log(mongoDB2.getCount()); //5