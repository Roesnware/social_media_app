// import modules 
const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// make schema for users
const userSchema = new Schema();

// export module
module.exports = userSchema;