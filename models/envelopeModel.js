const mongoose = require('mongoose');

const envelopeSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  title: String,
  budget: Number
})

module.exports = mongoose.model('Envelope', envelopeSchema)