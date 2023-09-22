const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database error connection:'));
db.once('open', () => {
  console.log('Successful connection to the database')
})