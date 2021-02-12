const router = require('express').Router();
const initiativeController = require('../controller/initiative');

router.post('/add', async (req, res) => {
	const response = await initiativeController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await initiativeController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await initiativeController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await initiativeController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await initiativeController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;