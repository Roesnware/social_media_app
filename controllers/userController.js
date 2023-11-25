// import models
const { User, Thought } = require('../models');

// controller
const userController = {
    // method to create a user 
    async createAUser(req, res) {
        try { // try 
            // create user using username and email form req
            const createThisUser = await User.create(
                {
                    username: req.body.username,
                    email: req.body.email,
                }
            )

            // err 
            if (!createThisUser) {
                res.status(400).json({ message: 'Error creating user!' });
            }

            // success
            res.status(200).json(createThisUser);
        }
        catch (err) { // catch err
            res.status(500).json(err);
        }
    },
    // method to get all users
    async getAllUsers(req, res) {
        try { // try 
            // get all users from db
            const allUsers = await User.find({})
                .select('-__v');

            // no users found 
            if (!allUsers) {
                res.status(400).json({ message: 'No users found!' });
            }

            // success
            res.status(200).json(allUsers);
        }
        catch (err) { // catch err
            res.status(500).json(err);
        }
    },
    // method to get a user 
    async getAUser(req, res) {
        try { // try 
            // get user from db
            const getThisUser = await User.findOne(
                {
                    _id: req.params.userId
                }
            )
                .select('-__v')
                .populate('thoughts')
                .populate('friends');

            // no user found 
            if (!getThisUser) {
                res.status(400).json({ message: 'No user found with that id!' });
            }

            // success
            res.status(200).json(getThisUser);
        }
        catch (err) { // catch err
            res.status(500).json(err);
        }
    },
    // update a user
    async updateAUser(req, res) {
        try { // try
            // find user and update 
            const updateThisUser = await User.findOneAndUpdate(
                {
                    _id: req.params.userId
                },
                {
                    $set: {
                        username: req.body.username,
                        email: req.body.email,
                    },
                },
                {
                    runValidators: true,
                    new: true,
                }
            );

            // err updating
            if (!updateThisUser) {
                res.status(400).json({ message: 'No user found with that id!' });
            }

            // success
            res.status(200).json(updateThisUser);
        }
        catch (err) { // catch err
            res.status(500).json(err);
        }
    },
    // delete a user 
    async deleteAUser(req, res) {
        try { // try
            // find user and delete
            const deleteThisUser = await User.findOneAndDelete(
                {
                    _id: req.params.userId
                }
            )

            // no user data
            if (!deleteThisUser) {
                return res.status(400).json({ message: 'No user found with that id!' });
            }

            // success
            res.status(200).json({ message: 'User successfully deleted!' });
        }
        catch (err) { // catch err
            res.status(500).json(err);
        }
    },
};

// export controller
module.exports = userController;