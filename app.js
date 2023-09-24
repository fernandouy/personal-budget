require('dotenv').config();
require('./config/database');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const { errorHandler } = require('./middlewares/errorHandler')

const envelopesRoutes = require('./routes/envelopes');

// Parse JSON
app.use(express.json());

// Routes
app.use('/envelopes', envelopesRoutes)

// Error middleware
app.use(errorHandler)

// Server
app.listen(PORT, () => {
  console.log(`Example app listen on port ${PORT}`)
})