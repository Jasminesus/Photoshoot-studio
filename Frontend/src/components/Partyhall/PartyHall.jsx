import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Partyhall.css';

const PartyHall = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [guestCount, setGuestCount] = useState(''); // Store selected guest count

  // Base price per 100 guests
  const basePrice = 80000;
  
  // Calculate price dynamically (e.g., ₹80,000 per 100 guests)
  const totalPrice = guestCount ? (guestCount / 100) * basePrice : 0;

  return (
    <section id="party-hall" className="d-flex align-items-center py-5">
      <div className="container">
        <div className="row">
          {/* Party Hall Image */}
          <div className="col-md-6">
            <img src="/assets/party hall.jpg" className="img-fluid" alt="Party Hall Interior" />
          </div>

          {/* Booking Section */}
          <div className="col-md-6">
            <h2>Welcome to Our Party Hall!</h2>
            <p>Your Dream Event Awaits!</p>

            {/* Date Picker Section */}
            <h4>Select Your Event Date:</h4>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()} // Prevent past date selection
              className="form-control mb-3"
              placeholderText="Pick a date"
            />

            {/* Guest Count Dropdown */}
            <h4>Select Number of Guests:</h4>
            <select
              className="form-control mb-3"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
            >
              <option value="">Select Guests</option>
              <option value="100">100 Guests</option>
              <option value="200">200 Guests</option>
              <option value="300">300 Guests</option>
              <option value="400">400 Guests</option>
              <option value="500">500 Guests</option>
            </select>

            {/* Pricing Display */}
            <h3>Total Price: {guestCount ? `₹${totalPrice.toLocaleString()}` : "Select Guest Count"}</h3>

            {/* Book Now Button */}
            <Link to='/payment'>
              <button 
                className="btn btn-primary" 
                disabled={!selectedDate || !guestCount}
              >
                {selectedDate && guestCount ? `Book Now for ${selectedDate.toDateString()}` : "Select Date & Guests"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartyHall;
