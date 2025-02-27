const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Define comparePassword function (without bcrypt)
userSchema.methods.comparePassword = function (inputPassword) {
  return this.password === inputPassword; // Simple string comparison
};

const User = mongoose.model('User', userSchema);
module.exports = User;
