const router = require('express').Router();
const stateController = require('../controller/state');

router.post('/add', async (req, res) => {
	const response = await stateController.add(req.body);
	res.send(response);
})

router.post('/addmany', async (req, res) => {
	const response = await stateController.addmany(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await stateController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await stateController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await stateController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await stateController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await stateController.aggregation();
	res.send(response);
	
})
router.get('/fetchBycountry', async (req, res) => {
	const response = await stateController.fetchByCountry(req.query.Country);
	res.send(response); 
})
module.exports = router;