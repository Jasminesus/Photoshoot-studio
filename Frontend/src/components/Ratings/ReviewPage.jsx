import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ReviewPage.css';

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const { eventTitle, userName, mobileNumber, address, eventId } = location.state || {};
  const navigate = useNavigate();

  const handleRatingChange = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleConfirm = () => {
    saveFeedback(); // Save the feedback
    setShowPopup(false);
    // Redirect to the feedback page after saving feedback
    navigate('/thankyou', { state: { eventTitle, rating, feedback } });
  };

  const saveFeedback = () => {
    const newFeedback = { eventId, eventTitle, rating, feedback };
    
    // Retrieve existing feedback from localStorage or initialize with an empty array
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    
    // Add the new feedback to the array
    feedbacks.push(newFeedback);

    // Save the updated array back to localStorage
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    
    console.log(`Feedback saved for ${eventTitle}:`, newFeedback);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <section className="rating-and-feedback py-5">
      <div className="container">
        <h2>Rate Your Experience for {eventTitle}</h2>
        <form onSubmit={handleSubmit}>
          <div className="rating mb-3">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${rating > index ? 'filled' : ''}`}
                onClick={() => handleRatingChange(index + 1)}
              >
                &#9733;
              </span>
            ))}
          </div>

          <div className="mb-3">
            <label className="form-label">Your Feedback:</label>
            <textarea
              className="form-control"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit Feedback</button>
        </form>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h3>Confirm Your Feedback</h3>
              <p>Event: {eventTitle}</p>
              <p>Rating: {rating} stars</p>
              <p>Feedback: {feedback}</p>
              <button className="btn btn-success" onClick={handleConfirm}>Confirm</button>
              <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewPage;
