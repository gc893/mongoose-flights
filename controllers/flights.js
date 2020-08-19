const Flight = require('../models/flights')

module.exports = {
    new: newFlight,
    create,
    index
}

function newFlight(req, res, next) {
    res.render('flights/new', {Flight ,title: 'Add Flight'})
  }

  function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];}
    Flight.create(req.body)
    .then(flight => {
        console.log(flight);
        res.redirect('/flights');
    })
    .catch( err => {
        console.log(err);
        res.redirect('/flights/new');
    })
  }

  function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', {flights, title: 'All flights'});
    })
}