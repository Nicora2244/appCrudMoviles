const mongoose = require('mongoose');

const multimediaSchema = new mongoose.Schema({
  url: { type: String, required: true },
  tipo: { type: String },
  estado: { type: Boolean, default: true },
  IdGrupoMultimedia: { type: mongoose.Schema.Types.ObjectId, ref: 'GrupoMultimedia' }
});

module.exports = mongoose.model('Multimedia', multimediaSchema);
