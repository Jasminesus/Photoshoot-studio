import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserProvider } from '../UserContext';

// Components
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Testimonials from './components/Reviews/Testimonials';
import Contact from './components/Contact/ContactUs';
import Footer from './components/footer/Footer';
import PartyHall from './components/Partyhall/PartyHall';
import PaymentGateway from './components/PaymentGateway/PaymentGateway';
import EventsList from './components/EventsList/EventsList';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ReviewPage from './components/Ratings/ReviewPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ThankyouPage from './components/ThankyouPage/ThankyouPage';
import AdminPage from './components/AdminPage/AdminPage';
import BookingPage from './components/bookingpage';

// App Component
function App() {
  // Manage user login state
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Check if the user is already logged in on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setUserLoggedIn(true);
      setLoggedInUser(user);
    }
  }, []);

  // Check if the current logged-in user is an admin
  const isAdmin = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    return user && user.role === "admin";
  };

  // Protect routes that require authentication
  const ProtectedRoute = ({ children }) => {
    return userLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <UserProvider>
      <Router>
        <div className="App">
          {/* Pass login state to NavBar */}
          <NavBar userLoggedIn={userLoggedIn} loggedInUser={loggedInUser} setUserLoggedIn={setUserLoggedIn} />

          {/* Define Routes */}
          <Routes>
            {/* Landing Page with all sections */}
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Services />
                <Testimonials />
                <Contact />
              </>
            } />

            {/* Public Pages */}
            <Route path='/about' element={<About />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/testimonials' element={<Testimonials />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path="/partyhall" element={<PartyHall />} />
            <Route path="/payment" element={<PaymentGateway />} />
            <Route path="/events" element={<EventsList />} />
            <Route path="/login" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/thankyou" element={<ThankyouPage />} />
            <Route path="/booking" element={<BookingPage />} />

            {/* Protected Route - Only accessible if the user is logged in */}
            <Route path="/profilepage" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />

            {/* Admin Route - Only accessible if the user is an admin */}
            <Route path="/adminpage" element={isAdmin() ? <AdminPage /> : <Navigate to="/login" />} />

            {/* Redirect to a 404 page or show a not found message */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>

          {/* Common Footer for all routes */}
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
