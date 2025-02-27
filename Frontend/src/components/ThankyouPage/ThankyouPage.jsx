import React from 'react';
// import './FeedbackPage.css';

const ThankyouPage = () => {
  // Retrieve feedback from localStorage
  const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

  return (
    <section className="feedback-page py-5">
      <div className="container">
        <h2>Feedback Received</h2>
        {feedbacks.length > 0 ? (
          <ul className="list-group">
            {feedbacks.map((feedback, index) => (
              <li key={index} className="list-group-item">
                <h5>{feedback.eventTitle}</h5>
                <p>Rating: {feedback.rating} stars</p>
                <p>Feedback: {feedback.feedback}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No feedback has been received yet.</p>
        )}
      </div>
    </section>
  );
};

export default ThankyouPage;
