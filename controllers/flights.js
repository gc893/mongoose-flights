const Flight = require('../models/flights')

module.exports = {
    new: newFlight,
    create,
    index
}

function newFlight(req, res, next) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', {departsDate ,title: 'Add Flight'})
  }

  function create(req, res) {
    req.body.departs = req.body.flightDate;
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
    Flight.find({}, null, {sort: 'departs'}, function (err, flights) {
        res.render('flights/index', {flights, title: 'All flights'});
    })
}