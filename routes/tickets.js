var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets')


router.delete('/:id', ticketsCtrl.remove);

module.exports = router;
