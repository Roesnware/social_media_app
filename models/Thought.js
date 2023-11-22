// import modules 
const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// make schema for thoughts
const thoughtSchema = new Schema();

// export module
module.exports = thoughtSchema;