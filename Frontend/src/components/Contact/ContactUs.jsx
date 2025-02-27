import './Contact.css';

const ContactUs = () => {
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#fff', color: '#000' }}>
      <h1>Contact Us</h1>
      <div className="container">
        
        <div className="row">
          {/* Left Column - Contact Form */}
          <div className="col-md-6" >
            <h2 className="text-center">Connect With Us
            </h2>
            <form className="mt-4">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>

          {/* Right Column - Map */}
          <div className="col-md-6">

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
