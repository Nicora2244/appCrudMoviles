const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // You can hash this later for security
  role: { type: String, default: 'user' }, // e.g., 'admin', 'user'
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);