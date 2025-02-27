const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;



// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myDatabase', {
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Failed", err));

// Define Schema & Model
const BookingSchema = new mongoose.Schema({
    userId: String,
    eventTitle: String,
    eventPrice: Number,
    userName: String,
    mobileNumber: String,
    address: String
});

const Booking = mongoose.model('Booking', BookingSchema);

// API Route to Fetch Bookings
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
});

// Start Server

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
