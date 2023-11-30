// import modules 
const { Schema, model } = require('mongoose');
const reaction = require('./Reaction');
const formatDate = require('../utils/formatDate');

// make schema for thoughts
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatDate(timestamp),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reaction],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// virtual for reactions on thoughts
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// make thought model
const Thought = model('thought', thoughtSchema);

// export module
module.exports = Thought;