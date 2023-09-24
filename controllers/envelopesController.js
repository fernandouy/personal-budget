const { default: mongoose } = require('mongoose');
const envelopeModel = require('../models/envelopeModel');

exports.getEnvelopes = async (req, res, next) => {
  try {
    const envelopes = await envelopeModel.find();
    res.status(200).send(envelopes);
  } catch (error) {
    next(error)
  }
}

exports.getEnvelopeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error('The id must be a valid MongoDB id');
      error.status = 400;
      throw error
    }
    const envelope = await envelopeModel.findOne({ _id: id });
    if (!envelope) {
      const error = new Error('Envelope not found');
      error.status = 404;
      throw error
    }
    return res.status(200).json(envelope);
  } catch (error) {
    next(error);
  }
}

exports.addEnvelope = async (req, res, next) => {
  try {
    const { title, budget } = req.body;
    if (!title || !budget) {
      throw new Error("'title' and 'budget' must be defined")
    }
    if (typeof budget !== "number") {
      throw new Error("'budget' must be a number")
    }
    const newEnvelope = await envelopeModel.create({ title, budget });
    res.status(201).send(newEnvelope);
  } catch (error) {
    next(error)
  }
}