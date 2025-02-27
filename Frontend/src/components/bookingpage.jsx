import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings from API
  useEffect(() => {
    axios.get("http://localhost:5000/api/bookings")
      .then(response => setBookings(response.data))
      .catch(error => console.error("Error fetching bookings:", error));
  }, []);

  return (
    <div>
      <h2>Bookings List</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <h4>{booking.eventTitle}</h4>
              <p>Price: {booking.eventPrice}</p>
              <p>Name: {booking.userName}</p>
              <p>Mobile: {booking.mobileNumber}</p>
              <p>Address: {booking.address}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default BookingsList;
