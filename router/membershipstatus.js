const router = require('express').Router();
const membershipstatusController = require('../controller/membershipstatus');

router.post('/add', async (req, res) => {
	const response = await membershipstatusController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await membershipstatusController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await membershipstatusController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await membershipstatusController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await membershipstatusController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;