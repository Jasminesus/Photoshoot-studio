import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Services.css'; // Import the CSS file for services

const Services = () => {
  return (
    <section id="services" className="text-center py-5" style={{  color: '#000' }}>
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-description">
          We offer a variety of services to make your event special. Discover more about what we provide!
        </p>
        <div className="row py-4">
          <div className="col-md-6">
            <div className="overlay-container">
              <img src="/assets/party hall.jpg" className="img-fluid service-img" alt="Party Hall" />
              <div className="overlay">
                <Link to="/partyhall">
                  <button className="btn btn-light overlay-btn">
                    Party Hall View
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="overlay-container">
              <img src="/assets/events.jpg" className="img-fluid service-img" alt="Events" />
              <div className="overlay">
                <Link to='/events'>
                <button className="btn btn-light overlay-btn">
                  Events View
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
