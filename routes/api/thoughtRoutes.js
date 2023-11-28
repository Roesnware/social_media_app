// import module
const router = require('express').Router();

// import methods from controller
const { createAThought, getAllThoughts, getAThought, updateAThought, deleteAThought, addAReaction, removeAReaction } = require('../../controllers/thoughtController');

// route for thoughts 
router.route('/')
    // get all thoughts 
    .get(getAllThoughts)
    // create a thought 
    .post(createAThought);

// route for single thoughts
router.route('/:thoughtId')
    // get a thought
    .get(getAThought)
    // update a thought
    .put(updateAThought)
    // delete a thought 
    .delete(deleteAThought);

// route for reaction
router.route('/:thoughtId/reactions')
    // create reaction on thought 
    .post(addAReaction);

// route for reactions
router.route('/:thoughtId/reactions/:reactionId')
    // delete reaction off thought 
    .delete(removeAReaction);

// export module
module.exports = router;