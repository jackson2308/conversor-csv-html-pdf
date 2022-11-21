class Table {

  constructor(array) {
    this.header = array.shift();
    this.rows = array;
  }
  
  get RowCount() {
    return this.rows.length
  }

}

module.exports = Table;