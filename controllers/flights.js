const Flight = require('../models/flights');
const Ticket = require('../models/tickets');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function newFlight(req, res, next) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 16);
    console.log(req.body),
    res.render('flights/new', {departsDate ,title: 'Add Flight'})
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
        res.redirect('/flights');
    })
  }

  function index(req, res) {
    Flight.find({}, null, {sort: 'departs'}, function (err, flights) {
        res.render('flights/index', {flights, title: 'All flights'});
    })
}

function show(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const arrivalDate = dt.toISOString().slice(0, 16);
    Flight.findById(req.params.id, function (err, f){
      f.destinations.sort((a, b) => {
        if(a.arrival.getTime() === b.arrival.getTime()) { return 0};
        return a.arrival.getTime() < b.arrival.getTime() ? -1 : 1;
      });
      Ticket.find({flight: f._id}, function(err, tickets){
        res.render('flights/show', {f, arrivalDate, title: f.flightNo, tickets});
      })
    })
}