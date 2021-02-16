const router = require('express').Router();
const donatepaymentController = require('../controller/donatepayment');

router.post('/add', async (req, res) => {
	const response = await donatepaymentController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await donatepaymentController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await donatepaymentController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await donatepaymentController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await donatepaymentController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await donatepaymentController.aggregation(req.query.donateid);
	res.send(response);
	
})
router.get('/fetchBycountry', async (req, res) => {
	const response = await donatepaymentController.fetchByCountry(req.query.Country);
	res.send(response); 
})
module.exports = router;