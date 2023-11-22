// import ocnnect and connection from mongoose
const { connect, connection } = require('mongoose');

// build connection string
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialmedia';

// connect using connection string 
connect(connectionString);

// export module 
module.exports = connection;