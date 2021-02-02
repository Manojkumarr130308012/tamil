const router = require('express').Router();
const newssController = require('../controller/news');

router.post('/add', async (req, res) => {
	const response = await newssController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await newssController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await newssController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbyevent', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await newssController.fetchdata();
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await newssController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await newssController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await newssController.aggregation();
	res.send(response);
	
})
router.get('/aggregation1', async (req, res) =>{
	let response = await newssController.aggregation1();
	res.send(response);
	
})
module.exports = router;