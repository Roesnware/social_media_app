// import modules 
const { Schema, Types } = require('mongoose');
const formatDate = require('../utils/formatDate');

// make schema for reactions
const reactionSchema = new Schema(
    {
        id: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionContent: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
        },
        createdOn: {
            type: Date,
            default: Date.now,
            get: (date) => { formatDate(date) },
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// export module
module.exports = reactionSchema;