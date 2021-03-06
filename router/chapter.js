const router = require('express').Router();
const chapterController = require('../controller/chapter');

router.post('/add', async (req, res) => {
	const response = await chapterController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await chapterController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await chapterController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbydistrict', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await chapterController.fetchdata1(req.query.district);
	res.send(response);
})
router.get('/fetchbycountrystate', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await chapterController.fetchdata2(req.query.Country,req.query.State);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await chapterController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await chapterController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await chapterController.aggregation();
	res.send(response);
	
})
router.get('/fetchdatafilter', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await chapterController.fetchdatafilter(req.query.Country,req.query.State,req.query.CityName);
	res.send(response);
})
module.exports = router;