const { Router } = require('express');
const controller = require('../controllers/root.controllers');

const router = Router();

router.get('/:id', controller.welcome);

module.exports = router;
