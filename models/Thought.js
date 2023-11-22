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

// virtual for reactions on thoughts
thoughtSchema.virtual('reactionsCnt').get( () => {
    return this.reactions.length;
});

// make thought model
const Thought = model('thought', thoughtSchema);

// export module
module.exports = Thought;