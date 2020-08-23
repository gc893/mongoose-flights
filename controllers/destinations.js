const Flight = require('../models/flights');

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
    Flight.findOne({'destinations._id': req.params.id}, function(err, flight) {
        console.log(flight);
        const destinationDoc = flight.destinations.id(req.params.id)
        destinationDoc.remove();
        flight.save( err => {
            if (err) {console.log(err)};
            res.redirect(`/flights/${flight._id}`);
        });
    })
}