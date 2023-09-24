const mongoose = require('mongoose');

const envelopeSchema = new mongoose.Schema({
  title: String,
  budget: Number
})

module.exports = mongoose.model('Envelope', envelopeSchema)