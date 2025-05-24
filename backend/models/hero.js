const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  bio: { type: String },
  img: { type: String },
  aparicion: { type: String },
  casa: { type: String }
});

module.exports = mongoose.model('Hero', heroSchema, 'heroes');