const router = require('express').Router();
const usersRoutes = require('./usersRoute');
const thoughtsRoutes = require('./thoughtsRoute');
// const reactionsRoutes = require('./reactionsRoutes');

router.use('/api/users', usersRoutes);
router.use('/api/thoughts', thoughtsRoutes);
// router.use('/reactions', reactionsRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});
  
module.exports = router;

