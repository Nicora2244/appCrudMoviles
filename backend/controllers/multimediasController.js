const Multimedia = require('../models/multimedia');

exports.getAll = async (req, res) => {
  try {
    const medios = await Multimedia.find();
    res.json(medios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const medio = await Multimedia.findById(req.params.id);
    if (!medio) return res.status(404).json({ message: 'Multimedia not found' });
    res.json(medio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const medio = new Multimedia(req.body);
    await medio.save();
    res.status(201).json(medio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const medio = await Multimedia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!medio) return res.status(404).json({ message: 'Multimedia not found' });
    res.json(medio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const medio = await Multimedia.findByIdAndDelete(req.params.id);
    if (!medio) return res.status(404).json({ message: 'Multimedia not found' });
    res.json({ message: 'Multimedia deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
