const express = require('express');
const router = express.Router();
const Phone = require('./../models/phone');

// GET - '/phones' - displays all phones (use phones.json as datasource)
router.get('/', (req, res, next) => {
  Phone.find()
    .then((phones) => {
      res.json({ phones });
    })
    .catch((error) => {
      next(error);
    });
});

// GET - '/phones/:id' - displays single phone's details
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Phone.findById(id)
    .then((phone) => {
      res.json({ phone });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
