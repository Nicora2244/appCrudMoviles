const Hero = require('../models/hero');

/*
// Get all heroes
exports.getAll = async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/

// Get all heroes
exports.getAll = async (req, res) => {
  try {
    console.log('Fetching all heroes...');
    const heroes = await Hero.find(); // Query the database
    console.log('Heroes fetched:', heroes); // Log the result
    res.json(heroes); // Send the result as a response
  } catch (error) {
    console.error('Error fetching heroes:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get one hero by ID
exports.getById = async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.id);
    if (!hero) return res.status(404).json({ message: 'Hero not found' });
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new hero
exports.create = async (req, res) => {
  try {
    const hero = new Hero(req.body);
    await hero.save();
    res.status(201).json(hero);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update existing hero
exports.update = async (req, res) => {
  try {
    const hero = await Hero.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!hero) return res.status(404).json({ message: 'Hero not found' });
    res.json(hero);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete hero
exports.remove = async (req, res) => {
  try {
    const hero = await Hero.findByIdAndDelete(req.params.id);
    if (!hero) return res.status(404).json({ message: 'Hero not found' });
    res.json({ message: 'Hero deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
