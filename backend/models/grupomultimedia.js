const mongoose = require('mongoose');

const grupoMultimediaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  estado: { type: Boolean, default: true },
  fecha_actualizacion: { type: Date, default: Date.now },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  fecha_creacion: { type: Date, default: Date.now },
  items: [
    {
      type: { type: String, required: true }, // e.g., 'image', 'video'
      url: { type: String, required: true }  // URL of the multimedia item
    }
  ],
  heroes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Heroe' }] // <-- Add this line
});

module.exports = mongoose.model('GrupoMultimedia', grupoMultimediaSchema);