const router = require('express').Router();
const BannerController = require('../controller/Banner');

router.post('/add', async (req, res) => {
	const response = await BannerController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await BannerController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await BannerController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await BannerController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await BannerController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;