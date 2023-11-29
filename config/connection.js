// import mongoose
const mongoose = require('mongoose');

// maek connection
mongoose.connect('mongodb://127.0.0.1:27017/socialmedia');

// export module 
module.exports = mongoose.connection;
