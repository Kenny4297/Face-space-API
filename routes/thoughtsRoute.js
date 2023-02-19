const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction
} = require('../controllers/ThoughtController');

// /api/Thoughts
//^ Get all Thoughts
router.route('/').get(getThoughts);

// /api/Thoughts/:ThoughtId
//^ Get single Thought
router.route('/:thoughtId').get(getSingleThought);

// /api/Thoughts/
//^ Create Thought
//! Remember! By including the "userId" we can associate the thought with a specific user! In a scenario where we have multiple users and each user can have multiple thoughts, it is important to know which user a particular thought belongs to.
router.route('/').post(createThought);

// /api/Thoughts/:ThoughtId
//^ Update Thought
router.route('/:thoughtId').put(updateThought);

// /api/Thoughts/:ThoughtId
//^ Delete Thought
router.route('/:thoughtId').delete(deleteThought);

//  /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').put(createReaction);

module.exports = router;