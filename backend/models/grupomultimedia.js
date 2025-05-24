const mongoose = require('mongoose');

const grupoMultimediaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  estado: { type: Boolean, default: true },
  fecha_actualizacion: { type: Date, default: Date.now },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  fecha_creacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GrupoMultimedia', grupoMultimediaSchema);