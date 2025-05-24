const express = require('express');
const router = express.Router();
const controller = require('../controllers/multimediasheroeController');

router.get('/heroe/:heroeId', controller.getImagenesPorHeroe);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
