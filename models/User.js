// import modules 
const { Schema, Types } = require('mongoose');

// make schema for users
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        friends:
            [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'user',
                },
            ],
        thoughts:
            [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'thought',
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
userSchema.virtual('friendsCnt').get( () => {
    return this.friends.length;
});

// make user model
const User = model('user', userSchema);

// export module
module.exports = User;