const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', function (req, res) {
  burger.all(function (data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function (req, res) {
  let devour = 0;
  if (req.body.devour === 'true') {
    devour = 1;
  }
  console.log(req.body);
  burger.create(
    ['burger_name', 'devour'],
    [req.body.name, devour],
    function (result) {
      console.log(result);
      res.json({ id: result.insertId });
    }
  );
});

router.put('/api/burgers/:id', function (req, res) {
  const condition = `id = ${req.params.id}`;

  console.log('condition', condition);

  burger.update(
    {
      devour: req.body.devour,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete('/api/burgers/:id', function (req, res) {
  const condition = `id = ${req.params.id}`;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
