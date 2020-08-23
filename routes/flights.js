var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');
const ticketsCtrl = require('../controllers/tickets')

/* GET users listing. */

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.get('/:id/tickets/new', ticketsCtrl.new);
router.post('/', flightsCtrl.create);
router.post('/:id/tickets', ticketsCtrl.create);

module.exports = router;
