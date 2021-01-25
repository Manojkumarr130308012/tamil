const router = require('express').Router();
const donateController = require('../controller/donate');

router.post('/add', async (req, res) => {
	const response = await donateController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await donateController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await donateController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await donateController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await donateController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;