const router = require('express').Router();
const memberpaymentController = require('../controller/memberpayment');

router.post('/add', async (req, res) => {
	const response = await memberpaymentController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await memberpaymentController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await memberpaymentController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await memberpaymentController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await memberpaymentController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await memberpaymentController.aggregation();
	res.send(response);
	
})
router.get('/fetchBycountry', async (req, res) => {
	const response = await memberpaymentController.fetchByCountry(req.query.Country);
	res.send(response); 
})
module.exports = router;