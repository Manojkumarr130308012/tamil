const router = require('express').Router();
const sponsorController = require('../controller/sponsor');

router.post('/add', async (req, res) => {
	const response = await sponsorController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await sponsorController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await sponsorController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await sponsorController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await sponsorController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;