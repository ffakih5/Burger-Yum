const express = require('express');

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', (req, res) => {
  burger.addBurger(req.body.burger_name, (result) => {
    res.status(200).end();
  });
});

router.post('/api/burgers/:id', (req, res) => {
  burger.updateBurger(req.body.devoured, req.params.id, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

module.exports = router;