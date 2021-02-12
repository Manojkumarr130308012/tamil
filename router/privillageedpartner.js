const router = require('express').Router();
const partnerController = require('../controller/privillagedpartner');

router.post('/add', async (req, res) => {
	const response = await partnerController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await partnerController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await partnerController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await partnerController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await partnerController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;