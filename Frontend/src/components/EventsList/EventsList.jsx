import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './EventsList.css'; // Import the CSS file for styling

const events = [
  { id: 1, title: 'Marriage', price: 'Rs.10000', image: '/assets/wedding1.jpg', description: 'Celebrate your love with an exquisite wedding ceremony tailored to your desires and dreams.' },
  { id: 2, title: 'Puberty', price: 'Rs.5000', image: '/assets/puperty3.jpg', description: 'Mark this special occasion with a memorable event that honors the journey into adulthood.' },
  { id: 3, title: 'Reception', price: 'Rs.8000', image: '/assets/reception.jpg', description: 'Enjoy a splendid reception with friends and family, filled with joy and celebration.' },
  { id: 4, title: 'Pre-Wedding', price: 'Rs.6000', image: '/assets/prewed2.jpeg', description: 'Capture the essence of your love before the big day with a stunning pre-wedding celebration.' },
  { id: 5, title: 'Birthday Party', price: 'Rs.4000', image: '/assets/birthday.jpg', description: 'Make every birthday unforgettable with a personalized party that reflects your unique style.' },
];

const EventsList = () => {
  const [selectedDates, setSelectedDates] = useState({});

  // Handle date selection
  const handleDateChange = (eventId, date) => {
    setSelectedDates(prev => ({ ...prev, [eventId]: date }));
  };

  return (
    <section className="events-list py-5">
      <div className="container">
        <h2 className="text-center">Events List</h2>
        <div className="row">
          {events.map(event => (
            <div className="mb-4" key={event.id}>
              <div className="event-card d-flex">
                <div className="event-image">
                  <img src={event.image} className="img-fluid" alt={event.title} />
                </div>
                <div className="event-content ms-3">
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                  <p>Price: {event.price}</p>

                  {/* Date Picker for event selection */}
                  <h5>Select Event Date:</h5>
                  <DatePicker
                    selected={selectedDates[event.id] || null}
                    onChange={(date) => handleDateChange(event.id, date)}
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()} // Prevent past dates
                    className="form-control mb-3"
                    placeholderText="Pick a date"
                  />

                  {/* Redirect to the payment page with selected date */}
                  <Link 
                    to="/payment"
                    state={{ 
                      eventId: event.id, 
                      eventTitle: event.title, 
                      eventPrice: event.price, 
                      eventDate: selectedDates[event.id] ? selectedDates[event.id].toDateString() : null 
                    }}
                    className="btn btn-primary"
                    disabled={!selectedDates[event.id]} // Disable if no date selected
                  >
                    {selectedDates[event.id] ? `Book for ${selectedDates[event.id].toDateString()}` : "Select a Date First"}
                  </Link>
                  <Link 
  to="/booking"
  state={{ eventId: event.id, eventTitle: event.title, eventPrice: event.price }}
  className="btn btn-primary"
>
  Book Now
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsList;
