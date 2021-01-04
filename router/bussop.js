const router = require('express').Router();
const bussopController = require('../controller/bussop');

router.post('/add', async (req, res) => {
	const response = await bussopController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bussopController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bussopController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await bussopController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await bussopController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await bussopController.aggregation(req.query.member);
	res.send(response);
	
})
router.get('/openaggregation', async (req, res) =>{
	let response = await bussopController.aggregation1();
	res.send(response);
	
})
module.exports = router;