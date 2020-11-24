const router = require('express').Router();
const membershipclassController = require('../controller/membershipclassification');

router.post('/add', async (req, res) => {
	const response = await membershipclassController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await membershipclassController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await membershipclassController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await membershipclassController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await membershipclassController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;