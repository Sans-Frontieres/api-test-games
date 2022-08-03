"use strict";

var _require = require('express'),
    Router = _require.Router;

var controller = require('../controllers/games.controllers');

var router = Router(); // router.get('/:id?', controller.welcome);
//para solicitud de obj entrantes

router.get('/', controller.getAll);
router.get('/count', controller.count);
router.get('/:id', controller.findByID);
router.post('/', controller.create);
router.put('/:id', controller.update);
router["delete"]('/:id', controller.remove);
module.exports = router;