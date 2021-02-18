const router = require('express').Router();
const advertisementController = require('../controller/advertisement');

router.post('/add', async (req, res) => {
	const response = await advertisementController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await advertisementController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await advertisementController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await advertisementController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await advertisementController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await advertisementController.aggregation(req.query.Event);
	res.send(response);
	
})
router.get('/fetchByevenid', async (req, res) => {
	const response = await advertisementController.fetchByEvent(req.query.Event);
	res.send(response); 
})
module.exports = router;