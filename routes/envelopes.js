const express = require('express');
const router = express.Router();
const { getEnvelopes } = require('../controllers/envelopesController')

router.get('/', getEnvelopes)

module.exports = router