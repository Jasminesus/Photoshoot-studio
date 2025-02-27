const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    eventTitle: { type: String, required: true },
    eventPrice: { type: Number, required: true },
    userName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    address: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
