const mongoose = require('mongoose');

const multimediaHeroeSchema = new mongoose.Schema({
  IdHeroe: { type: mongoose.Schema.Types.ObjectId, ref: 'Hero', required: true },
  IdMultimedia: { type: mongoose.Schema.Types.ObjectId, ref: 'Multimedia', required: true },
});

module.exports = mongoose.model('MultimediaHeroe', multimediaHeroeSchema);
