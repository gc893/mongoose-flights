const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let today = new Date();
today.setFullYear(today.getFullYear() + 1);
let followingDay = today.setDate(today.getDay() + 1);

const destinationSchema = new Schema({
    destinationAirport: {type: String, enum: ['AUS','DFW','DEN','LAX','SAN']},
    arrival: {type: Date, default: followingDay}
}, {
})

const flightSchema = new Schema({
    airline: {type: String, enum: ['American', 'Southwest', 'United']},
    airport: {type: String, enum: ['AUS','DFW','DEN','LAX','SAN']},
    flightNo: {type: Number, min: 10, max: 9999 },
    departs: {type: Date, default: today},
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema)