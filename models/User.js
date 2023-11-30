// import modules 
const { Schema, model } = require('mongoose');

// make schema for users
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please use valid email address.'],
        },
        thoughts:
            [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'thought',
                },
            ],
        friends:
            [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'user',
                },
            ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual for friends
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// make user model
const User = model('user', userSchema);

// export module
module.exports = User;