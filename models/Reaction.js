// import modules 
const { Schema, Types } = require('mongoose');
const formatDate = require('../utils/formatDate');

// make schema for reactions
const reactionSchema = new Schema(
    {
        ReactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatDate(timestamp),
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