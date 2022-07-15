const express = require('express');
const router = express.Router();
// const routeGuard = require('./../middleware/route-guard');
const phones = require('./../phones.json');

// GET - '/phones' - displays all phones (use phones.json as datasource)
router.get('/', (req, res, next) => {
  res.json({ data: phones });
});

// GET - '/phones/:id' - displays single phone's details
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.json({ data: phones[id] });
});

module.exports = router;
