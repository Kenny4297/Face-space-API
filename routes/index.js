const router = require('express').Router();
const usersRoutes = require('./usersRoute');
const thoughtsRoutes = require('./thoughtsRoute');
const reactionsRoutes = require('./reactionsRoutes');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/reactions', reactionsRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});
  
module.exports = router;

