require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user');

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Seed the database
const seedUser = async () => {
  try {
    const existingUser = await User.findOne({ username: 'adminnj' });
    if (existingUser) {
      console.log('User already exists:', existingUser);
    } else {
      const newUser = new User({
        username: 'adminnj',
        password: '12345', // Use a hashed password in production
        role: 'admin'
      });
      await newUser.save();
      console.log('Default user created:', newUser);
    }
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding user:', err);
    mongoose.connection.close();
  }
};

seedUser();