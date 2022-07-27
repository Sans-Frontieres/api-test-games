const { Router } = require('express');

const router = Router();

router.get('/:id', (req, res) => {
	const id = req.params.id;
	const token = req.query.token;
	console.log(token);
	res.status(200).json(id);
});

module.exports = router;
