const express = require('express');
const router = express.Router();
const { getEnvelopes, getEnvelopeById, addEnvelope } = require('../controllers/envelopesController');

router.get('/', getEnvelopes);

router.get('/:id', getEnvelopeById);

router.post('/', addEnvelope);

module.exports = router;