const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let today = new Date();
today.setFullYear(today.getFullYear() + 1);

const flightSchema = new Schema({
    airline: {type: String, enum: ['American', 'Southwest', 'United']},
    airport: {type: String, enum: ['AUS','DFW','DEN','LAX','SAN']},
    flightNo: {type: Number, min: 10, max: 9999 },
    departs: {type: Date, default: today}
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema)