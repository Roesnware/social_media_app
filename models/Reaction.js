// import modules 
const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// make schema for reactions
const reactionSchema = new Schema();

// export module
module.exports = reactionSchema;