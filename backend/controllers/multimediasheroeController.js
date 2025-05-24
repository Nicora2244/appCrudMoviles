const MultimediaHeroe = require('../models/multimediasheroe');

// Get all multimedia for a specific hero
exports.getImagenesPorHeroe = async (req, res) => {
  try {
    const heroId = req.params.heroeId;
    const imagenes = await MultimediaHeroe.find({ IdHeroe: heroId })
      .populate('IdMultimedia')
      .exec();
    res.json(imagenes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new multimedia-hero link
exports.create = async (req, res) => {
  try {
    const multimediaHeroe = new MultimediaHeroe(req.body);
    await multimediaHeroe.save();
    res.status(201).json(multimediaHeroe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update multimedia-hero link by ID
exports.update = async (req, res) => {
  try {
    const multimediaHeroe = await MultimediaHeroe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!multimediaHeroe) return res.status(404).json({ message: 'Not found' });
    res.json(multimediaHeroe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete multimedia-hero link by ID
exports.remove = async (req, res) => {
  try {
    const multimediaHeroe = await MultimediaHeroe.findByIdAndDelete(req.params.id);
    if (!multimediaHeroe) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
