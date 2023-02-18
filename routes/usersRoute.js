const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// /api/users
//^ Get all users
router.route('/').get(getUsers);

// /api/users/:userId
//^ Get single User
router.route('/:userId').get(getSingleUser);

// /api/users/
//^ Create User
router.route('/').post(createUser);

// /api/users/:userId
//^ Update User
router.route('/:userId').put(updateUser);

// /api/users/:userId
//^ Delete user
router.route('/:userId').delete(deleteUser);

// /api/users/:userId/friends/:friend


module.exports = router;