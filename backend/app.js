require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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

// Route for grupoMultimedias
const grupoMultimediasRouter = require('./routes/grupomultimedias');
app.use('/api/grupomultimedia', grupoMultimediasRouter);

const multimediasheroeRoutes = require('./routes/multimediasheroe');
app.use('/api/multimediasheroe', multimediasheroeRoutes);

const multimediasRoutes = require('./routes/multimedias');
app.use('/api/multimedias', multimediasRoutes);

const heroesRoutes = require('./routes/heroes');
app.use('/api/heroes', heroesRoutes);

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'API is working' });
});

app.get('/test-db', async (req, res) => {
  try {
    const heroes = await mongoose.connection.db.collection('heroes').find().toArray();
    res.json(heroes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

