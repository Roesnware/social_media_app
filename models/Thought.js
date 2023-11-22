// import modules 
const { Schema, model } = require('mongoose');
const reaction = require('./Reaction');

// make schema for thoughts
const thoughtSchema = new Schema(
    {
        thoughtContent: {
            type: String,
            required: true,
        },
        createdOn: {
            type: Date,
            default: Date.now,
        },
        user: {
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

// export module
module.exports = thoughtSchema;