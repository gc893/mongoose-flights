const Ticket = require('../models/tickets');

module.exports = {
    new: newTicket,
    create,
    remove
}

function newTicket(req, res, next) {
    res.render('tickets/new', {title: 'Add Ticket', flightId: req.params.id})
}

function create(req, res) {
    const flightID = req.params.id;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    req.body.flight = flightID;
    Ticket.create(req.body)
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            res.redirect(`/flights/${flightID}`);
        })
}

function remove(req, res, next) {
    Ticket.findByIdAndDelete(req.params.id, (err) =>{
        if(err){
            console.log(err);
        }
        const backURL = req.header('Referer') || '/';
        res.redirect(backURL);
    })
}