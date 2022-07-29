const { Router } = require('express');
const controller = require('../controllers/games.controllers');

const router = Router();

// router.get('/:id?', controller.welcome);
//para solicitud de obj entrantes

router.get('/', controller.getAll);
router.get('/count', controller.count);
router.get('/:id', controller.findByID);

router.post('/', controller.create);

// router.put('/:id', controller.update);

// router.delete('/:id', controller.remove);

module.exports = router;
