const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/links-in-bio');

module.exports = mongoose.connection;
