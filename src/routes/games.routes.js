// const { Router } = require('express');
import { Router } from 'express';
// const controller = require('../controllers/games.controllers');
import * as controller from '../controllers/games.controllers.js';

const router = Router();

// router.get('/:id?', controller.welcome);
//para solicitud de obj entrantes

router.get('/', controller.getAll);
router.get('/count', controller.count);
router.get('/:id', controller.findByID);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.remove);

// module.exports = router;
export default router;
