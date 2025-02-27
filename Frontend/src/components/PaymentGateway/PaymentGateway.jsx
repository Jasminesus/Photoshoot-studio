import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PaymentGateway.css';

const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [qrCode, setQrCode] = useState(''); // QR code image
  const [userName, setUserName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [paymentScreenshot, setPaymentScreenshot] = useState(null); // Store payment screenshot

  const location = useLocation();
  const navigate = useNavigate();

  const { eventId, eventTitle, eventPrice } = location.state || {};

  // Log the state to check if it's correctly passed
  console.log(location.state);

  // Assuming the logged-in user's email is stored in localStorage after login
  const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    if (e.target.value === 'upi') {
      // Display the QR code if UPI is selected
      setQrCode('/assets/qr.jpeg'); // Replace with your QR code image URL
    } else {
      setQrCode(''); // Reset QR code if another method is selected
    }
  };

  const handlePaymentScreenshotUpload = (e) => {
    setPaymentScreenshot(e.target.files[0]); // Store the payment screenshot
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === 'upi' && !paymentScreenshot) {
      alert('Please upload the payment screenshot.');
      return;
    }

    // Save booking details, including the user's email and payment screenshot
    const bookingDetails = {
      eventId,
      eventTitle,
      eventPrice,
      userName,
      mobileNumber,
      address,
      userEmail: loggedInUserEmail,
      paymentScreenshot: paymentScreenshot ? paymentScreenshot.name : null, // Save the screenshot name
    };
    saveBooking(bookingDetails);

    alert('Payment successful! Redirecting to the feedback page...');

    // Redirect to the review page
    navigate('/review', {
      state: { eventId, eventTitle, eventPrice, userName, mobileNumber, address },
    });
  };

  const saveBooking = (details) => {
    // Retrieve existing bookings or initialize an empty array
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    
    // Add the new booking
    bookings.push(details);
    
    // Save updated bookings to localStorage
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Optionally save this booking to an admin section (e.g., a database)
  };

  return (
    <section className="payment-gateway py-5">
      <div className="container">
        <h2>Payment Gateway</h2>
        <p>Event:  {eventTitle}</p>
        <p>Price:  {eventPrice}</p>

        <form onSubmit={handleSubmit}>
          {/* User Details Section */}
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number:</label>
            <input type="tel" className="form-control" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Address:</label>
            <textarea className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>

          {/* Payment Section */}
          <div className="mb-3">
            <label className="form-label">Choose Payment Method:</label>
            <select className="form-select" onChange={handlePaymentMethodChange} required>
              <option value="">Select a payment method</option>
              <option value="upi">UPI</option>
              <option value="cash">Cash</option>
            </select>
          </div>

          {/* Display QR Code for UPI Payments */}
          {paymentMethod === 'upi' && (
            <>
              <div className="mb-3">
                <label className="form-label">Scan the QR Code to Pay:</label>
                {qrCode && (
                  <div className="qr-code-container">
                    <img src={qrCode} alt="UPI QR Code" className="qr-code" />
                    <p>Amount to Pay: ₹{eventPrice}</p>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Upload Payment Screenshot:</label>
                <input type="file" className="form-control" accept="image/*" onChange={handlePaymentScreenshotUpload} required />
              </div>
            </>
          )}

          {/* Book Now Button */}
          <button type="submit" className="btn btn-primary">
            Book Now: {eventTitle} - {eventPrice}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PaymentGateway;
