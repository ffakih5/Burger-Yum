const connection = require('./connection');

const orm = {
  selectAll(tableInput, cb) {
    const queryString = 'SELECT * FROM ??';
    connection.query(queryString, [tableInput],
      (err, res) => {
        if (err) throw err;
        cb(res);
      }
    );
  },
  insertOne(tableInput, colToSearch, valOfCol, cb) {
    const queryString = 'INSERT INTO ?? (??) VALUES (?)';
    connection.queryString(queryString, [tableInput, colToSearch, valOfCol],
      (err, res) => {
        if (err) throw err;
        cb(res);
      }
    );
  },
  updateOne(tableInput, colToSearch, valOfCol, conOfCol, valOfCon, cb) {
    const queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
    connection.queryString(queryString, [tableInput, colToSearch, valOfCol, conOfCol, valOfCon],
      (err, res) => {
        if (err) throw err;
        cb(res);
      }
    );
  }
};

module.exports = orm;