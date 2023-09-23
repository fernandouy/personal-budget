const envelopeModel = require('../models/envelopeModel');

exports.getEnvelopes = async (req, res) => {
  try {
    const envelopes = await envelopeModel.find();
    res.status(200).send(envelopes)
  } catch (error) {
    res.status(400).send(error)
  }
}