const Router = require('express');
const router = new Router();
const listController = require('../controllers/listController')

router.post('/lists', listController.createList);
router.get('/lists', listController.getLists);

module.exports = router;