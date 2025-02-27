import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // For navigation links

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container d-flex justify-content-between align-items-start">
        {/* Left Section - Studio Info */}
        <div className="footer-left">
          <h5>Photoshoot Studio</h5>
         
          <p>8608949822</p>
          <p>Theppakullam , madurai </p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="footer-middle">
          <h5>Links</h5>
          <ul className="footer-links list-unstyled">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section - Newsletter and Social Icons */}
        
          <div className="social-icons mt-3">
           
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icon" /><br/>
            </a>
                      
          </div>
        </div>
  
    </footer>
  );
};

export default Footer;
