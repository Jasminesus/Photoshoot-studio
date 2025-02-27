import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import your CSS

const NavBar = ({ userLoggedIn, loggedInUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
    window.location.reload(); // Reload page to update navbar
  };

  return (
    <Navbar bg="light" expand="lg" className="sticky-top p-3">
      <Container>
      <Navbar.Brand as={Link} to="/">
 

</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/testimonials">Happy Clients</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          {userLoggedIn ? (
            <NavDropdown
              title={
                loggedInUser?.profilePicture ? (
                  <img
                    src={loggedInUser.profilePicture}
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: '30px', height: '30px' }}
                  />
                ) : (
                  "Profile"
                )
              }
              id="basic-nav-dropdown"
              align="end"
              className="ms-3"
            >
              <NavDropdown.Item as={Link} to="/profilepage">View Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Button as={Link} to="/login" variant="outline-primary" className="ms-3">
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
