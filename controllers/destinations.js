const Flight = require('../models/flights');
const { findById } = require('../models/flights');

module.exports = {
destinations,
remove
}

function destinations(req, res, next) {
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function(err){
             res.redirect(`/flights/${req.params.id}`)    
     })
    })
}

function remove(req, res, next) {
res.redirect('/flights');
}