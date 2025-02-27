const User = require('../models/user');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Create a new user
    const user = new User({ username, email, password });
    await user.save();

    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Register Error:', error.message);
    res.status(500).json({ message: 'Error creating user' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Ensure comparePassword function exists
    if (!user.comparePassword) {
      console.error('comparePassword function is missing in User model');
      return res.status(500).json({ message: 'Internal server error' });
    }

    // Compare passwords correctly
    const isValidPassword = user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({ message: 'User logged in successfully' });

  } catch (error) {
    console.error('Login Error:', error.message);
    res.status(500).json({ message: 'Error logging in user' });
  }
};
