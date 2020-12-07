const router = require('express').Router();
const trackerController = require('../controller/tracker');

router.post('/add', async (req, res) => {
	const response = await trackerController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await trackerController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await trackerController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await trackerController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await trackerController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await trackerController.aggregation(req.query.Event);
	res.send(response);
	
})
router.get('/fetchByevenid', async (req, res) => {
	const response = await trackerController.fetchByCountry(req.query.Country);
	res.send(response); 
})
module.exports = router;