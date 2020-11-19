const router = require('express').Router();
const interestsController = require('../controller/interests');

router.post('/add', async (req, res) => {
	const response = await interestsController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await interestsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await interestsController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await interestsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await interestsController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;