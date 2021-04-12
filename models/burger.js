const orm = require('../config/orm');

const burger = {
  allBurgers(cb) {
    orm.selectAll('burgers', (res) =>
      cb(res));
  },
  addBurger(newBurger, cb) {
    orm.insertOne('burgers', 'burger_name', newBurger, (res) =>
      cb(res));
  },
  updateBurger(burgerId, devouredStatus, cb) {
    orm.updateOne('burgers', 'devoured', devouredStatus, 'id', burgerId, (res) => cb(res));
  }
}

module.exports = burger