const router = require('express').Router();
const bussconController = require('../controller/bizcon');

router.post('/add', async (req, res) => {
	const response = await bussconController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bussconController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bussconController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await bussconController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await bussconController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await bussconController.aggregation();
	res.send(response);
	
})
router.get('/fetchBycountry', async (req, res) => {
	const response = await bussconController.fetchByCountry(req.query.Country);
	res.send(response); 
})
module.exports = router;