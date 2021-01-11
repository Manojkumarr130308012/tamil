const router = require('express').Router();
const boardController = require('../controller/Board');

router.post('/add', async (req, res) => {
	const response = await boardController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await boardController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await boardController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await boardController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await boardController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;