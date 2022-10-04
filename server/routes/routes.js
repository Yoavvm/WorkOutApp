const router = require('express').Router();

const exerciseController = require('../exercises/controller')

router.get('/exercises', exerciseController.getAll);

module.exports = router;



