//standat values for MySQL requests
class MySQL{
	constructor(){
			this.select = "*";
			this.where = false;
			this.limit = "*";
	}
}

//standat values for class PostgreSQL requests
class PostgreSQL{
	constructor(){
			this.select = "*";
			this.where = false;
			this.limit = "*";
	}
}

//standat operations for SQL requests
class BuilderSQL{
	select(){}

	where(){}

	limit(){}

	getSQL(){}
}

// class to make MySQL requests from typed values
class BuilderMySQL extends BuilderSQL{
	constructor(){
			super()
			this.sql = new MySQL()
	}

	select(value){
			this.sql.select = value;
			return this;
	}

	where(value){
			this.sql.where = value;
			return this;
	}

	limit(value){
			this.sql.limit = value;
			return this;
	}

	getSQL(){
			console.log(`SELECT ${this.sql.select} WHERE ${this.sql.where} LIMIT ${this.sql.limit};`);
			return this.sql;
	}
}

// class to make PostgreSQL requests from typed values
//the same as MySQL
class BuilderPostgreSQL extends BuilderSQL{
	constructor(){
			super()
			this.sql = new PostgreSQL()
	}

	select(value){
			this.sql.select = value;
			return this;
	}

	where(value){
			this.sql.where = value;
			return this;
	}

	limit(value){
			this.sql.limit = value;
			return this;
	}

	getSQL(){
			console.log(`SELECT ${this.sql.select} \n WHERE ${this.sql.where} \n LIMIT ${this.sql.limit};`);
			return this.sql;
	}
}

//Creating SQL requests using typed values
//Standart order: select, where, limit, getSQL
let requestMySQL = new BuilderMySQL().select("all").where("position == employee").limit("salary > 1000").getSQL();
console.log(requestMySQL);

let requestPostgreSQL = new BuilderPostgreSQL().select("users").where("city == Kharkiv").getSQL();
console.log(requestPostgreSQL);