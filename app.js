require('dotenv').config();
require('./config/database');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

const envelopesRoutes = require('./routes/envelopes');

// Parse JSON
app.use(express.json());

// Routes
app.use('/envelopes', envelopesRoutes)

// Server
app.listen(3000, () => {
  console.log(`Example app listen on port ${PORT}`)
})