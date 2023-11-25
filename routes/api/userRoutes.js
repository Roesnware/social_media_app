// import module
const router = require('express').Router();

// import methods from controller
const { createAUser, getAllUsers, getAUser, updateAUser, deleteAUser, addAFriend, removeAFriend } = require('../../controllers/userController');

// route for all users
router.route('/')
    // get all users
    .get(getAllUsers)
    // create a user 
    .post(createAUser);

// route for a user
router.route('/:userId')
    // get a user 
    .get(getAUser)
    // update a user
    .put(updateAUser)
    // delete a user 
    .delete(deleteAUser);

// route for friends 
router.route('/:userId/friends/:friendsId')
    // add a friend 
    .post(addAFriend)
    // remove a friend
    .delete(removeAFriend);

// export module 
module.exports = router;
