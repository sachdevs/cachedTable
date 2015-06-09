function cachedTable(tableName, columns){
	this.database = {};
	this.tableName = tableName;
	this.columns = columns;
	for(var i = 0; i < this.columns.length; i++){
		this.database[this.columns[i]] = {};
	}
	localStorage.setItem(this.tableName, JSON.stringify(this.database));

}

cachedTable.prototype = {
	constructor: cachedTable,
	addRow: function(row){
		if(row.length !== this.columns.length)
			throw "Invalid number of items for row, line 9 cachedTable.js"
		for(var i = 0; i < this.columns.length; i++){
			this.database[this.columns[i]] = row[i];
		}
		localStorage.setItem(this.tableName, JSON.stringify(this.database));
	},
	_log:function(){
		console.log(localStorage.getItem(this.tableName));
	},
	_clear: function(){
		localStorage.clear();
	}
}

cachedTable.prototype.log = function(first_argument) {
	// body...
};

var hi = new cachedTable('lol', ['a', 'b', 'c']);
hi.addRow(['k', 'l', 'i']);
hi.addRow(['k', 'l', 'i']);
hi.addRow(['k', 'l', 'i']);
hi.addRow(['k', 'l', 'i']);
hi.addRow(['k', 'l', 'i']);
hi.addRow(['k', 'l', 'i']);
hi.addRow(['k', 'l', 'i']);
hi._log();
