// import models
const { User, Thought } = require('../models');

// controller
const thoughtController = {
    // method to create a thought
    async createAThought(req, res) {
        try { // try 
            // create thought 
            const createThisThought = await Thought.create(req.body);

            // add thought to user
            const addThoughtToThisUser = await User.findOneAndUpdate(
                {
                    _id: req.body.userId,
                },
                {
                    $push: {
                        thoughts: createThisThought._id,
                    },
                },
                {
                    new: true,
                }
            );

            // no user associated to thought 
            if (!addThoughtToThisUser) {
                return res.status(400).json({ message: 'No user found with that id!' });
            }

            // success
            res.status(200).json({ message: 'Thought successfully created!' });
        }
        catch (err) { // catch err
            res.status(500).json(err);
        }
    },
    // method to get all thoughts
    async getAllThoughts(req, res) {
        try { // try 
            // get all thoughts
            const allThoughts = await Thought.find({})
                .sort({ createdAt: -1 });

            // no thoughts 
            if (!allThoughts) {
                console.log('No thoughts found!');
            }

            // success
            res.status(200).json(allThoughts);
        }
        catch (err) { // catch err
            res.status(500).json(err);
        }
    },
    // method to get a thought
    async getAThought(req, res) {
        try { // try 
            // get thought by id 
            const getThisThought = await Thought.findOne(
                {
                    _id: req.params.thoughtId
                }
            );

            // no thought found 
            if (!getThisThought) {
                return res.status(400).json({ message: 'No thought found with that id!' });
            }

            // success
            res.status(200).json(getThisThought);
        }
        catch (err) { // catch err
            res.status(500).json(err);
        }
    },
    // method to update a thought
    async updateAThought(req, res) {
        try { // try 
            // update tohught with that id 
            const updateThisThought = await Thought.findOneAndUpdate(
                {
                    _id: req.params.thoughtId,
                },
                {
                    $set: {
                        thoughtText: req.body.thoughtContent,
                        username: req.body.username,
                    }
                },
                {
                    runValidators: true,
                    new: true,
                }
            );

            // no thouhgt found
            if (!updateThisThought) {
                return res.status(400).json({ message: 'No thought found with that id!' });
            }

            // success
            res.status(200).json(updateThisThought);
        }
        catch (err) { // catch err
            res.status(500).json(err);
        }
    },
    // method to delete a thought
    async deleteAThought(req, res) {
        try { // try 
            // remove thought by id 
            const deleteThisThought = await Thought.findOneAndRemove(
                {
                    _id: req.params.thoughtId,
                }
            );

            // no thought found 
            if (!deleteThisThought) {
                return res.status(400).json({ message: 'No thought found with that id!' });
            }

            // remove thought id from user
            const deleteThoughtFromThisUser = User.findOneAndUpdate(
                {
                    thoughts: req.params.thoughtId,
                },
                {
                    $pull: {
                        thoughts: req.params.thoughtId,
                    },
                },
                {
                    new: true,
                }
            );

            // no user found 
            if (!deleteThoughtFromThisUser) {
                return res.status(400).json({ message: 'No user found with that id!' });
            }

            // success
            res.status(200).json({ message: 'Thought successfully deleted!' });
        }
        catch (err) { // catch err
            res.status(500).json(err);
        }
    },

    // method to add a reaction 
    async addAReaction(req, res) {
        try { // try 
            // update thought reactions 
            const addReactionToThisThought = await Thought.findOneAndUpdate(
                {
                    _id: req.params.thoughtId,
                },
                {
                    $addToSet: {
                        reactions: req.body,
                    },
                },
                {
                    runValidators: true,
                    new: true,
                }
            );

            // no thought found 
            if (!addReactionToThisThought) {
                return res.status(400).json({ message: 'No thought found with that id!' });
            }

            // success
            res.status(200).json(addReactionToThisThought);
        }
        catch (err) { // catch err
            res.status(500).json(err);
        }
    },
    // method to remove a reaction 
    async removeAReaction(req, res) {
        try { // try
            // update thoguht to remove reaction
            const removeReactionToThisThought = await Thought.findOneAndUpdate(
                {
                    _id: req.params.thoughtId
                },
                {
                    $pull: {
                        reactions: {
                            reactionId: req.params.reactionId
                        },
                    },
                },
                {
                    runValidators: true,
                    new: true,
                }
            );

            // no thought found 
            if (!removeReactionToThisThought) {
                return res.status(400).json({ message: 'No thought found with that id!' });
            }

            // success
            res.status(200).json(removeReactionToThisThought);
        }
        catch (err) { // catch err
            res.status(500).json(err);
        }
    },
};

// export controller
module.exports = thoughtController;