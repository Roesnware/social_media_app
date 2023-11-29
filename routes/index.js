// import modules 
const router = require('express').Router();
const apiRoutes = require('./api');

// api routes
router.use('/api', apiRoutes);

// 404 page 
router.use((req, res) => res.send('Wrong route!'));

// export module
module.exports = router;