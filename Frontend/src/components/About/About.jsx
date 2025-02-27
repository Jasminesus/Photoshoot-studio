import './About.css'; // Import the custom CSS file
import {  Button } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="d-flex align-items-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <h2>About Us</h2>
            <p>
            Capturing Your Moments, Creating Everlasting Memories
            Welcome to Frame & Focus photography, where photography is not just a profession—it's a passion. We believe that every moment holds a story waiting to be told,
            and our mission is to preserve those priceless emotions through breathtaking visuals.
            </p>
            <p>We are a team of dedicated photographers and creative storytellers who specialize in transforming fleeting moments into timeless treasures. 
              Whether it’s the joy of a wedding, the laughter of a family portrait, the elegance of a fashion shoot, or the energy of a corporate event, we bring artistry, precision, and a personal touch to every frame.

What We Offer
📸 Wedding & Engagement Photography 
🎭 Portrait & Fashion Photography 
📢 Commercial & Brand Photography 
🎉 Event Photography 

Let's Create Something Beautiful Together!
Whether you’re celebrating life’s biggest milestones or simply want to capture everyday moments in an extraordinary way,
  Frame & Focus Photography is here to turn your vision into reality. Let’s freeze time, frame emotions, and create something truly unforgettable.

       </p>
            <Button  variant="outline-primary">know more</Button>
          </div>
          <div className="col-md-6 order-md-1">
            <img src="/assets/about us.jpg" className="img-fluid about-img" alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
