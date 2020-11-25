const router = require('express').Router();
const membershipcostController = require('../controller/membershipcost');

router.post('/add', async (req, res) => {
	const response = await membershipcostController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await membershipcostController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await membershipcostController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await membershipcostController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await membershipcostController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await membershipcostController.aggregation();
	res.send(response);
	
})
module.exports = router;