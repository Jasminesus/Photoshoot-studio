import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import styles from "./styles.module.css";

const Login = ({ setUserLoggedIn }) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // ✅ Admin Login (Bypassing API)
    if (data.email === "admin@gmail.com" && data.password === "Admin123") {
      const user = { email: data.email, role: "admin" };
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setUserLoggedIn(true);
      navigate("/adminpage");
      alert("Admin login successful!");
      return; // Exit to prevent API call
    }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", { 
        email: data.email, 
        password: data.password 
      });

      console.log("Login Response:", response.data);

      // ✅ Check backend response correctly
      if (response.data.message === "User logged in successfully") {
        const userRole = response.data.role || "user"; // Default to "user" if no role provided
        const user = { email: data.email, role: userRole };

        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setUserLoggedIn(true);

        if (userRole === "admin") {
          navigate("/adminpage");
        } else {
          navigate("/profilepage");
        }

        alert("Login successful!");
      } else {
        setError("Incorrect email or password. Please try again.");
      }
    } catch (err) {
      console.error("Login Error:", err);

      if (err.response?.status === 401) {
        setError("Incorrect email or password. Please try again.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
