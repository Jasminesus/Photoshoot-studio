import React, { useEffect, useState } from "react";
import './AdminPage.css';

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Load bookings from localStorage
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Here you can manage all the events and users.</p>

      <h2>Event Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Event Title</th>
              <th>Price</th>
              <th>Mobile Number</th>
              <th>Address</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.userName}</td>
                <td>{booking.eventTitle}</td>
                <td>{booking.eventPrice}</td>
                <td>{booking.mobileNumber}</td>
                <td>{booking.address}</td>
               <td>{booking.date}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPage;
