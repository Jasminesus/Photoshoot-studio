// EventModal.js
import React from 'react';
import { useNavigate} from 'react-router-dom';
import './EventModal.css'; // Import CSS for modal styling

const EventModal = ({ event, onClose }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    // Redirect to payment page with event details
    navigate(`/payment/${event.id}`);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p>Price: {event.price}</p>
        <div className="modal-images">
          {event.images.map((img, index) => (
            <img key={index} src={img} alt={`Image ${index + 1}`} />
          ))}
        </div>
        <button className="btn btn-primary" onClick={handleBooking}>
          Book Now
        </button>
        <button className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;
