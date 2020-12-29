const router = require('express').Router();
const bussicategoryController = require('../controller/bussinesscate');

router.post('/add', async (req, res) => {
	const response = await bussicategoryController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bussicategoryController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bussicategoryController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await bussicategoryController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await bussicategoryController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;