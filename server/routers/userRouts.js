const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.post('/user', userController.createUser);
router.get('/user', userController.getUsers);

module.exports = router;