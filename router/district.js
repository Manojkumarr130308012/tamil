const router = require('express').Router();
const districtController = require('../controller/district');

router.post('/add', async (req, res) => {
	const response = await districtController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await districtController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await districtController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await districtController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await districtController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await districtController.aggregation();
	res.send(response);
	
})
router.get('/fetchBycity', async (req, res) => {
	const response = await districtController.fetchBycity(req.query.region);
	res.send(response); 
})
router.get('/fetchBystate', async (req, res) => {
	const response = await districtController.fetchBystate(req.query.State);
	res.send(response); 
})
module.exports = router;