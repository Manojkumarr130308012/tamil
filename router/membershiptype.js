const router = require('express').Router();
const membershiptypeController = require('../controller/membershiptype');

router.post('/add', async (req, res) => {
	const response = await membershiptypeController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await membershiptypeController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await membershiptypeController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await membershiptypeController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await membershiptypeController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;