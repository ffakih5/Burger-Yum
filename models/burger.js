const orm = require('../config/orm.js');

const burgers = {
  all(cb) {
    orm.all('burgers', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create('burgers', cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete('burgers', condition, (res) => cb(res));
  },
};
// Export the database functions for the controller (catsController.js).
module.exports = burgers;
