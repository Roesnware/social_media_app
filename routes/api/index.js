// import modules
const router = require('express').Router();

// import routes 
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// routes for users and thoughts
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// export module
module.exports = router;