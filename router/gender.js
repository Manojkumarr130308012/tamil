const router = require('express').Router();
const genderController = require('../controller/gender');

router.post('/add', async (req, res) => {
	const response = await genderController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await genderController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await genderController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await genderController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await genderController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;