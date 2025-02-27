import { Carousel } from 'react-bootstrap';
import './Home.css'; // Import the custom CSS file

const Home = () => {
  return (
    <section id="home">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/assets/graduation4.jpg" alt="First slide" />
          
          <Carousel.Caption>
            <h3>Frame & Focus studio</h3>
            <p>Through the lens, we freeze time and frame emotions</p>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    </section>
  );
};

export default Home;
