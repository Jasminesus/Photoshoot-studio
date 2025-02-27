import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [userBookings, setUserBookings] = useState([]);
  
  // Get the logged-in user's email from local storage or context
  const loggedInUserEmail = localStorage.getItem('loggedInUserEmail'); 

  useEffect(() => {
    if (!loggedInUserEmail) return;

    axios.get(`http://localhost:5000/api/auth/bookings/${loggedInUserEmail}`)
      .then(response => setUserBookings(response.data))
      .catch(error => console.error("Error fetching bookings:", error.response?.data || error));
  }, [loggedInUserEmail]);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {loggedInUserEmail}</p>
      <h4>Your Bookings:</h4>
      {userBookings.length > 0 ? (
        <ul>
          {userBookings.map((booking, index) => (
            <li key={index}>
              <h5>{booking.eventTitle}</h5>
              <p>Price: {booking.eventPrice}</p>
              <p>Name: {booking.userName}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default ProfilePage;
