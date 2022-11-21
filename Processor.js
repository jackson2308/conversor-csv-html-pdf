class Processor {

  static Process(data) {
    const row = data.split('\r\n')
    const rows = [];
    row.forEach(element => rows.push(element.split(',')))
    return rows;
  }

}


module.exports = Processor;