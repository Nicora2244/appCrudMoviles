const GrupoMultimedia = require('../models/grupomultimedia');

// Get all groups
exports.getAll = async (req, res) => {
  try {
    const grupos = await GrupoMultimedia.find();
    res.json(grupos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a group by ID
exports.getById = async (req, res) => {
  try {
    const grupo = await GrupoMultimedia.findById(req.params.id);
    if (!grupo) return res.status(404).json({ message: 'Group not found' });
    res.json(grupo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create group
exports.create = async (req, res) => {
  const grupo = new GrupoMultimedia(req.body);
  try {
    const newGrupo = await grupo.save();
    res.status(201).json(newGrupo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update group
exports.update = async (req, res) => {
  try {
    const grupo = await GrupoMultimedia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!grupo) return res.status(404).json({ message: 'Group not found' });
    res.json(grupo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete group
exports.remove = async (req, res) => {
  try {
    const grupo = await GrupoMultimedia.findByIdAndDelete(req.params.id);
    if (!grupo) return res.status(404).json({ message: 'Group not found' });
    res.json({ message: 'Group deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
