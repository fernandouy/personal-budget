const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Envelopes home page')
})

module.exports = router